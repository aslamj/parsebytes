import sys, os

with open("third-party.list", "r") as f:
  for line in f:
    line = line.strip()
    line = line.strip('\t\n\r')
    if len(line) == 0:
      continue
    if line.find('#') == 0:
      continue
    temps = line.split('/')
    folder = temps[5]
    file = temps[len(temps) - 1]
    os.system('mkdir ' + folder)
    cmd = "curl -o " + folder + "/" + file + " http:" + line
    os.system(cmd)