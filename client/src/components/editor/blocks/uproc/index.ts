import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "uproc";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AcWAy0DPTaSawAAB1RJREFUaN7lmn1sVeUZwH/vube99ONSWujqmWIYgqCxfDiRLSQaRLPx1/5wixlWF4eYsWVZ5ja7JWM6FpDqEmK6ZJis6OZHHLBsiYJzAyzZktGFUS0TlToQCn3bUCiW297ej3Oe/XHOKbe1F27vfQttfZKbe+65977n+b3Px3me97xgTPSwTy+/3E9nZ1qJSEhEwv6rTETmiMgtInKrf1ye8X1IRJSIDBursbGfCSR65Odi6Cirq+udd/Jk+hERaRKRDrmynBGRF0RkrYjMF5GytrZU5NPX0hMGvAp0LejN0Hn2zjt75J13klKAnDtwINGwdGnPIuiceflJzl2swq2qrwd9N7AHaAN+BsyyLFCqoBmsOn7ceeL0aeddUG+CXgn6Bu8rO29oa+yQOrhgFehVwB+BZmC5aZ8JhYYmbRmwH9gJ+j7QMy9B6/G2sA3o5cAmYC+w4irGzZeAvwFPg/6yp8vYrG3lbl07OK4DdgDfuYYJYx2wC/RDY3XxcO6wOgp837fsRJDPA38APQdoBPsCaAW2FGDhIdhqoGECwWbKRuAZ0LYHq/N16WGwW66xC+fi4g2ga67k3uHs2dgGdAmwAXgEUExsqQNioOvBvjic47LAw37wXT9uJ4MoYD1w0rO2natLD91vv+7H7WSTLaAfyFaRWVni9ja/YgoxOeXnoBePFs/WKEVFKfAAcDuTV24Dvgm6fKRrj5alv+jN0KSXep9lNOChuK2eREkqF/kh6M9lMlojMvNc4BtTCPhrwE2ZjFaGdaPAo0w9WQ96emBlK8O6lcC3pyDwQ0BVYOUghi1gaf4LAhNeloEOZWbpaVMsWY2UHwCRTOAIsGoKA68ASjKT1o1MffkCaGX5RfeyzwDwcmAIuPYzAFwbtIfKrz2ntChYAqhwyEIJ3Oq6UxzYYqFSqLBlKYAa15Vx6snzFzGoUiikKgAVVkoU47B8E4koiosLGyOdBlOeFwCGZejQrIUrKhTl5YXN4+Cgi+OY1csSV0RciZu1r1BTYzFrVmGV6sWLQiplRiNXEBHEclxwXD427dLV1RbTphVm4e5uIR43Y2HHlVOOK1jikR8xi2tRVVV4H6K1Y8ylxeVd10UsP3j/a9Kd580LsXhxuOCRBgeN3iuPAGLV1FhSUaFaTY68ZEmYFSsKS9Ht7Q6dnUYTVisgVldXtaxeXdw2e7aZVri01GLlygglJYXF73vvpdDaNXnHPAyIpZTF+vVl5x9/vOwsuAU+tRfuuaeIBx8sKVi799936OpyTMFeAM4OrXjcdVdx6rHHSrevW1eGiJM37Pz5YTZtmk5FReFWOXEiRSplzKVfAlJDCwCxGInSUrWjoSHK2rXlgDvGQsSltraIV1+dwaJFhSerI0dStLWlTcbvS0ACwHIcIRpVAB2Vldb/tm6dTtP2GSxYUOSDjwYv/sshGlXU10f5818queOOIiPaNTenaGlJm4rfU8DHwWOXcCikgkL9vFL8IhpVr3zr4VLuXRXhxAmHffuSHPxXijNn0vQPQFERXHedxcKFYe6/fxpz54aw7VAwaQVLLCa0tib9CTUy5pNAr3doDx9RRObh7ZaZHZyLx71qJ52+1L2Ew1Bc7NXKynDbsWvXIHV1F0gkjAzXBdwN9rHgRNgHRXmaHweeApqCH5SUqIJvMTmn0gsue/cmSSSMWfeXPhPBk1ELCGBRSrnAP4CWa9GkNzcnef75flOw/wHeBjsduPNQlh7WNyrVDjx7tWE/+CDNxo1GN5E+C/aHn67yh8dwcLjnakJ/8omwbVs/ra2Dpqy7FXjjkitnAVZKBfEcB14E/jnesKkU/GlXnOeei6GUkQ0H//Z0t/uHb6i7zKJTkMRE5KvA74DrxwPWcWDHjjhr1vSilGViDUsD68DePRrsqDGcYWmllPor8GPgnGnY/n6hqWmANWt6ASOwvcBPfFiVbRdP1jpQKSW+pV8TkQjwa2CWCdhj7Wle2D7Ali0XMbRv5hxQD/Yrfsxmnb6cCl+l1O9FJI63jWlO3utKLuzcOchvtw1woDmOUiETlu0AngD7tUun7OwsV+yBfI18N78P+BHwlbFqtWd3gr/vTdDYOOAv2xjJxvuBZ8B+K9vOuzEDZ4Ar383n4j1Vf+pK/zl/3uX11xMcPJhk9xsJOk47Jhv6X3ldkN2eyy7aMQOPyN5h38rfA1ZntFDqo48cDh1K0tKS5PDhNEePOvT0OPlcbmR7Fvz5LeA33rudypaNjQCPqLsRkRuTSbl9377Ek01N8SVaO/T1QU+PS3e364eDMYu24W0VPgT2ycz6eCyS/5RngG/e3Dd7w4bYzY7DT0Hda/gOth94GjgG9ql8QQsGHj2b60oRZuA9fH6U/LdRvO0XPAe9+6vda0xHM8OMnHEdwts3EgJqgFtAFlgWN5SXWzMjEVWuQA0mJBaLuT2uyxlQHwJHgW7A8ZZkbCf7Nbj2Fh5dKe1fR1TIgukVlopEFAoYTAh9fa44DoDy143sHMbMX/4P9kdAD+7Wks4AAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "uProc";
        }
    })
    export class uProc extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    