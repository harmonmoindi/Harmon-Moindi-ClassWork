from fastapi import APIRouter, status, Request, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()

from app import db

class Member(BaseModel):
    name: str
    email: EmailStr
    password: str

@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: Member):
    #data validation
    print(payload)
    existing_member = await db.member.find_unique(where={"email": payload.email})

    if existing_member:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="Email already exists")

    async with prisma.tx() as tx:
        new_member = await tx.member.create(
            data={
                "name": payload.name,
                "email": payload.email,
            }
        )
        member_password = await tx.member_password.create(
            data={
                "member_id": new_member.id,
                "password": payload.password,
            }
        )

    return {"message": "Member created successfully", "member": new_member}

