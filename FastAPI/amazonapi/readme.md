# MVP

## An app where users can search and order products online.

## images, etc - logi and authentication.

## order products.

## Tools Technology

- Backend python <Fast Api>
- orm <prisma orm>
- images Cloudflare <>

# STEP 1 Backend Developer

- Create or model your DB
- Meet criteria for goal mvp.
- Use drawsql

# create your db in beekeper.

# installing dependencies

    pipenv install fastapi "uvicorn[standard]" prisma

    pipenv run prisma init
        - Check the following
            Use node -v 22
            pipenv run prisma db pull
            pipenv run prisma generate

- Routes to begin with - User Route - Member Route
  -> signup <create an account>
  -> login <authentication>

-- for data validation(optional) use pydantic
pipenv install pydantic 'pydantic[email]'
