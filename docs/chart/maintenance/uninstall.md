# Uninstalling Codacy

To ensure a clean removal you should uninstall Codacy Self-hosted before destroying the cluster.

To do so run:

```bash
helm -n codacy uninstall codacy
kubectl -n codacy delete --all pod &
kubectl -n codacy delete --all pvc &
kubectl -n codacy delete --all job &
sleep 5
kubectl -n codacy patch pvc -p '{"metadata":{"finalizers":null}}' $(kubectl -n codacy get pvc -o jsonpath='{.items[*].metadata.name}')
sleep 5
kubectl -n codacy delete pod $(kubectl -n codacy get pod -o jsonpath='{.items[*].metadata.name}') --force --grace-period=0
kubectl -n codacy get pod &
kubectl -n codacy get pvc &
kubectl -n codacy get job &
```

Note that the deletion of `pvc`s in the above command has to run in the background due to a cyclic dependency in one of the components. If you're unsure of the effects of these commands please run each of the `bash` subcommands and validate their output:

```bash
echo "PVCs to delete:"
kubectl get pvc -n codacy -o jsonpath='{.items[*].metadata.name}'
echo "PODS to delete:"
kubectl get pods -n codacy -o jsonpath='{.items[*].metadata.name}'
```
