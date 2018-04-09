# CloudAssignment4

## Hadoop Streaming API and Map Reduce

### Hadoop Streaming API was used to run the python script on top of java libraries written for hadoop and MapReduce.
### The MapReduce code is designed to analyze the data and yield summary counts for each vehicle that describes the total count, per vehicle type, that the vehicle type was involved in an incident.If the same type of vehicle was involved more than once in an incident, count the vehicle twice for the purpose of the summary statistic.

### mapper.py reads each record from the dataset line by line and finds all the vehicle type involved in an incident and give them a count of 1.
### reducer.py sums all the counts for each vehicle type and outputs final count of the number of times a specific vehicle type was involved in any incident.

### Comand to run after clonning the directory:
#### hadoop jar /usr/hdp/2.6.3.0-235/hadoop-mapreduce/hadoop-streaming-2.7.3.2.6.3.0-235.jar -file mapper.py -mapper mapper.py -file reducer.py -reducer reducer.py -input /data/nyc/nyc-traffic.csv -output out4
 
### The output will be generated in out4/part-00000 file.
