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

