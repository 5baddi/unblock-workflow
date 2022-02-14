import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "mailerlite-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAxlBMVEUJwmn///8Bwmj9/v78/v0bwmwAv1rd8OIAvVIAvVUtxHB50JeN1KMow28AvE6d2bAsw3D6/fvk9OnS7NkAvljJ6dIAvEwFwmng8uUAv1/1+/fm9etvzpAxxHIAwGHr9u980Jkkw20VwmoAwWUAuTfw+fPM6tUgw20Auj/Z7+APwmr3/PjV7dyy4cCW2KuG059/0ZtOyH4AvEoAtyxjy4lAxnc3xXTd8ePA5cuS16iJ1KJnzIxYyYPF58+54sWj27QAtREAtADofrBbAAACcklEQVRIx+2V6XKiQBCAbWaEAZVkAFFuEAVv45lzs7vv/1LbxCSYaHGkav/5SfVMdfHRPcjUNK5cqUFPqETvkjtNo2YFonR6pguDpsHECjB50BS+tTwQjFUiVSBpi3Hza+3p1HqAiiSxMPjSdMQWQGg14IFFwmnT8d4GCpUgwF/8k8aFjrzC5BuUlNkUHtVb4URm7XeZHC9S8AwCN6pySSZgcyDHaYF8sTIBxwtnAKPlb54lKKkhU/g19jWAxZ9tFyj+oJbcVSMHQOqsAyAUtMmxOM4RUiqbTQ0HTjPXMVpvN3+0QKvJcwlD3zPduY4tEJjpr6/6DEipjG3fj5kDE0v0/M3WswH0tbrdbtY6kPLKoIuWBAtvHyu79ZLDnLHOU9tTDXwFFWTD6gPlq3HLtjH7rL70AZyd6RIgFWVoD++yXN+Xu4DMDQGz1WQOT8OQEg5dNnDvwvCu5an479eoTHB4UJXNcDwcjmV1XkcOKXBIZH8x0ZFEguI1b76tGXEE4yb/NotkpjgoW3EmP5nPQRAArMz4UXK0pHWDTZdujMRkEnBYbIXDlPUh2G9Uoxmbf1O7cM1a7NoAwWGd3cYffUN2R9kW3VvMOLS1orYxjGwgx5hlAknLtgjq95P7EWCqQMaYX3mKknxbFchYNo84Ih+TzxyERnS5MvmsmU3Je4bkD+Cg+VOUzmQCFZi5Yto7l2m5TvhkZ0S9s8ro8qUbtop5kUVc8JmMbjgW5RLENEX3u8yBt9SDcqsU02mgeybji2CKUEqunh509jNTeo36CLfmku+YJzR+Iqdiy1Xruvnp7lsddH9qZ2f9j+1e48qV/8A/kA1E+aQOqU4AAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "MailerLite Trigger";
        }
    })
    export class MailerLiteTrigger extends NodeBlock
    {
    
    }