import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "msg91";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAABLCAMAAAB3L4R5AAAAeFBMVEUAAABKSkxKSkxLS0wcdLsedLoQcL8ddboedLkbdbpAQFAedLpKSkpISEhKSkxKSkxKSktKSk1KSk1JSU0YeLcedLtLS0xKSk0ddLlKSk0edboddbkddbpLS00ddboddLkcdboddrkddLscdboddLkec7kedbpLS02XqJIaAAAAJnRSTlMAgMBAQPAQwIAwEOAwIOCQcGCwUCBv0PCg38+wYKCfj5BQTz/QX1TqrasAAAOfSURBVGje7ZfXsqJAEEB7QBBEogRRMd47/f9/uD3JuSyr1FaxLg+cF5mRqj50IMDCwsLCwsLCwj8gvBxgFpSXiHMO/5+yOpDIDFz8byEyAxf/+0gKc3C5C5E5uNzPHudzcAkvQmQGLqGc3xm4qPmdgYsvRWbgouZ3Di6vRbzT/pMudn6HfJVw+5hLSCKvOfoQeh9w0fP7jivA6SP9UlbvRahVAC4f6d0DH8ELwf/Qs5GP8EWtcuCzcNn7sPL4LFwq2bVzcPFuAGf+0iVmLIMfZIzFoMg7p3GcbANPdqxwHIft7MgEwcOHJ/7jIV2u/m0f8QERde2av3ZxETEGq0ZLFWrboqIAxYahoVaRL+ZiNd8UX7pcgAir9bBrI/7GZYeImXXJaMm0Y8Jc182SXJ/Y0k66o500SaXKgXvXmwh4AsFKTgeoDJzvvjjltPds1wLc3r9LMSywti4tLZk6qDc6HyZ/tUu/duvKvRKIvfqtOF9XxoWgVSjTE3zJ5UmeMuLCGtyCZosJbYgDUyrzR4OFMLCUnOviROKSKf0rWFkXkx5Q6aE//TMfdykwBU2KKcNUla4XusaktxZpiUBRcQ8U1sVyrErQJR1zKZDl2IKGUsTQUS4uWFyztKwpG4qQ8/C1CxFd7uKxPOrioBsjbk0jN6BctogdWApM4Dc8HthbyumtC+FJlXEXqE2ROuy0Czi98ZLD1Yf/dAlGXAzjLgwbNR4iQQxb3azouM+WprMGNTpO7SKimKHJMZF3GBW/xqdNLu+HFj3KvjaYzoWiJKpIcqBc7UIGibDZyGFDkyFHksuOPavh9qZzkaPc6hIZF2vTqj3XDJSEyaHm6/vjceF0L1tN4RIjqn7YyhKpaHHvmeAMRtohFykjOVKGyglcTBaoSKpEg7gMcSeM2dAFymB/DEI48QimctFF2qiEbPoumwaZcHWGLnairhO51Hpo4506BO1iAxcAnd20LlagnMSF6QtOMOsw0y5536UDiBusX7j44tE4qUuGRYub/j3WNHem2qb7s8uZR/60LrF9gUuQ0TrW7VJjE6tfdOKhS3kQ3zvTuKSmKSlWbiPRfpG5rstaua1lxB6RNsjUy+33Wb7E9lyCYC3w/trFXmKGzcY2CLlomh1osgSf5CowcfWh7/KTcEWcAmIv/L7eu+TMNd8DudmSR1vmOInT5UKw/xlQsJ3cXEXrY2VN1A0ngDH8lYD0TAI9WFhYWFhYWFj4n/wCa8I/xpiM6mcAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "MSG91";
        }
    })
    export class MSG91 extends NodeBlock
    {
    
    }