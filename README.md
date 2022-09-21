# Kafka


## Test kafka-connect:
- source: POSTGRES
- sink: Elastic Search

## 01 - Up services:
```
docker-compose up -d
```

## Validate services:
- control-center (KafkaUI): http://localhost:9021
- kibana(elasticSearchUI):  http://localhost:5601/
- Connect in database Postgre (you can use Dbaver):
    - user: postgres
    - pass: secretpassword

## connectors to configure kafka connect:
- ./connector (use the interface of control-center)