import sys
import csv

with sys.stdin as file:
        reader = csv.reader(file, delimiter=',')
        reader.next()
        for i in reader:
                i = i[-5:]
                clean_line = filter(None, i)
                for v_type in clean_line:
                        print(v_type + "\t" + str(1))