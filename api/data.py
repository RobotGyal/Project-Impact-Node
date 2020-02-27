import csv
import pandas




# BUILT IN CSV READER
# meteorites = "meteorite-landings.csv"

# columns = []
# rows = []

# # Reading from file
# with open(meteorites, 'r') as csvfile:
#     csvreader = csv.reader(csvfile)

#     # getting each row
#     for row in csvreader:
#         rows.append(row)
    
#     fields = rows[:][0]


# print("Field names are: ")
# print(fields)



meteor = pandas.read_csv('meteorite-landings.csv')
print(meteor)