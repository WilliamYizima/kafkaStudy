-> K8S config
kubectl create -f https://download.elastic.co/downloads/eck/2.3.0/crds.yaml

kubectl apply -f https://download.elastic.co/downloads/eck/2.3.0/operator.yaml

kubectl get all -n elastic-system

kubectl port-forward service/es01-es-http 9200
kubectl port-forward service/es01-kb-http 5601

-> view password
PASSWORD=$(kubectl get secret es01-es-elastic-user  -o=jsonpath='{.data.elastic}' | base64 --decode)
echo $PASSWORD

-> created kubectl config
kubectl create secret generic kibana-elasticsearch-credentials --from-literal=elasticsearch.password=$PASSWORD
https://localhost:5601


-> configure permissions in elastic
```
curl -u "elastic:$PASSWORD"  -X POST "http://XXXX.239:9200/_security/role/es_sink_connector_role?pretty" -H 'Content-Type: application/json' -d'
{
  "indices": [
    {
      "names": [ "*" ],
      "privileges": ["create_index", "read", "write", "view_index_metadata"]
    }
  ]
}'
```

```
curl -u elastic:$PASSWORD  -X POST "http://XXXX.239:9200/_security/user/es_sink_connector_user?pretty" -H 'Content-Type: application/json' -d'
{
  "password" : "YOURPASS",
  "roles" : [ "es_sink_connector_role" ]
}'
```


-> Fonts
https://medium.com/rahasak/deploy-elasticsearch-and-kibana-cluster-on-kubernetes-with-elasticsearch-operator-79f205170f40