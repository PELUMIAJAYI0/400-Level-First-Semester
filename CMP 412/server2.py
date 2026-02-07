import socket
#we use socket to cimmunicate

ss = socket.socket(family==socket.AF_INET, type=socket.SOCK_STREAM)
print("server start")


ip = socket.gethostname()
port = 9000

ss.bind((ip, port))

ss.listen(3)

con, addr = ss.accept()

print("address client connected: ", addr)

data = con.recv(1024)

print("message before decoding: ", data)

data = data.decode()

print("message after decoding: ", data)
