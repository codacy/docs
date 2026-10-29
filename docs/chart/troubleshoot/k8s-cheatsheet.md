---
description: Useful helm and kubectl commands to help troubleshoot your Codacy Self-hosted instance.
---

# Kubernetes cheatsheet

## Debugging using events

!!! important
    Always check the pods and deployment versions in the namespace
    to make sure you aren't debugging an issue in a version that's not the one you would expect

Events are a great way to understand what's going on under the hood in a Kubernetes cluster.
By looking at them you can see if probes are failing, and other important signals from your cluster.

Get events for the whole namespace:

```bash
kubectl -n codacy get events --sort-by=.metadata.creationTimestamp
```

Get error events:

```bash
kubectl -n codacy get events --sort-by=.metadata.creationTimestamp --field-selector type=Error
```

Get warning events:

```bash
kubectl -n codacy get events --sort-by=.metadata.creationTimestamp --field-selector type=Warning
```

Get events from a specific pod:

```bash
kubectl -n codacy get events --sort-by=.metadata.creationTimestamp --field-selector involvedObject.name=<POD-NAME>
```

## Helm

Check all the previous releases in your namespace:

```bash
helm -n codacy history codacy
```

Rollback to a specific revision:

```bash
helm -n codacy rollback codacy <REVISION>
```

## Edit configmap

```bash
kubectl get configmaps
```

**and**

```bash
kubectl edit configmap <configmap-name>
```

## Restart deployment of daemonset

### daemonsets

```bash
kubectl get daemonsets
```

**and**

```bash
kubectl rollout restart daemonset/<daemonset-name>
```

### deployment

```bash
kubectl get deployment
```

**and**

```bash
kubectl rollout restart deployment/<deployment-name>
```

**and**

```bash
kubectl rollout status deployment/<deployment-name> -w
```

## Read logs

### daemonset with multiple containers

```bash
kubectl logs daemonset/<daemonset-name> <container-name> -f
```

### service

```bash
kubectl get svc
```

**and**

```bash
kubectl logs -l $(kubectl get svc/<service-name> -o=json | jq ".spec.selector" | jq -r 'to_entries|map("\(.key)=\(.value|tostring)")|.[]' | sed -e 'H;${x;s/\n/,/g;s/^,//;p;};d') -f
```

## Open shell inside container

```bash
kubectl exec -it daemonset/<daemonset-name> -c <container-name> sh
```

**or**

```bash
kubectl exec -it deployment/<deployment-name> sh
```

## MicroK8s

### Session Manager SSH

When using AWS Session Manager, to connect to the instance where you installed microk8s,
since the CLI is very limited you will benefit from using these aliases:

```bash
alias kubectl='sudo microk8s.kubectl -n <namespace-name>'
alias helm='sudo helm'
```
