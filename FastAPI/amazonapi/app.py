from contextlib import asynccontextmanager
from fastapi import FastAPI
import uvicorn
from routes.member import router as member_router

from prisma import Prisma

db = Prisma()

@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()

app = FastAPI(title="Amazon API", lifespan=lifespan)

app.include_router(member_router, prefix = "/members")

app.get("/")
async def root():
    members = await db.member.find_many()
    print(members)
    return {"message": "Welcome to the Amazon API! App is running."}

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
