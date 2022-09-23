https://medium.com/rahasak/deploy-elasticsearch-and-kibana-cluster-on-kubernetes-with-elasticsearch-operator-79f205170f40

kubectl create -f https://download.elastic.co/downloads/eck/2.3.0/crds.yaml

kubectl apply -f https://download.elastic.co/downloads/eck/2.3.0/operator.yaml

kubectl get all -n elastic-system

kubectl port-forward service/es01-es-http 9200
kubectl port-forward service/es01-kb-http 5601


PASSWORD=$(kubectl get secret es01-es-elastic-user  -o=jsonpath='{.data.elastic}' | base64 --decode)
echo $PASSWORD
kubectl create secret generic kibana-elasticsearch-credentials --from-literal=elasticsearch.password=$PASSWORD
https://localhost:5601

```
curl -u "elastic:$PASSWORD"  -X POST "http://52.184.206.239:9200/_security/role/es_sink_connector_role?pretty" -H 'Content-Type: application/json' -d'
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
curl -u elastic:$PASSWORD"  -X POST "http://52.184.206.239:9200/_security/user/es_sink_connector_user?pretty" -H 'Content-Type: application/json' -d'
{
  "password" : "mw5w1vm3Y6650vm1EW8wXh4l",
  "roles" : [ "es_sink_connector_role" ]
}'
```