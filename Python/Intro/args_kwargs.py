def args_kwargs(*args, **kwargs):
    print("--------------------------")
    print("All args", args)
    print("All kwargs", kwargs)
    print("--------------------------")


args_kwargs(50, 60, 40, 70, x = 20, v = 1000, c = "Me?")
