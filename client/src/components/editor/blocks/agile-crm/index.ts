import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "agileCrm";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABTVBMVEVAneNAneNAneP///8/neQ/neMfjN5uteZCnuMljuCmz+1Dn+X///3///sei90aid1BnuUwleM6muRFn+M0l+IqkuIdi98Xh9xBn+U2mOQ8nOMrk+InkOEijuApkN7w+Pldq+VjreMlkONKoeE/mt7y+fv0+frq9PnS5/Ov1e09nOUyl+NLouIulOI8meAljt8bid/8//vj8fja6/Sy1u6hze2AvOd6ueZBnOAgjOAylN8uk94kjdz7/PrJ4/TF4fOn0u6lzuuFv+mKwug/nuZ0tuU2meJRpOEukd0PhN0gi9v3+/vs9frm8fbU6PbL5vS73PC42vCVyu+Yyeydy+uTxuqPw+pmsOY6m+VqseRVp+NGn+AUhtwOgtnd7fa+4PTH5PKf0PGk0PBzuOo3muVssuRZp+Q1lt3n8fne7vix1/K/3fC/3e+mz+8AdtXkFxw0AAAAAnRSTlPy5YB5WPAAAAMiSURBVEjH7dfXUuMwFAZg1kc2Yi2XxHac3kMgnRRS6b3D0ntZyvb3v1yZakIcArnZmeW/yIzH+nykE40S93zqeW8oZbpIT08X9gP/9xjJt5/vwjjhStpsyaRdfjPGSdFbUSKRCK45NITfgnmXVBk+/RaI9QeWBzYPFjUn6hjz3vmdODxGGDzMsbhD7JQOBww0srr+Y2wFaPrL+p6zI8yLczEAMjo5V89m/dHe8SHKpyQ77gDzvggdHej1SR43ixKuqh4ZvdXodSwn5+lM85Wj+68IybJvsQhAglX+NYywPkHrRh2mkYpNXwdYmXe1wwjR/RROCUD2dR6ZV+KpxwEmJdwOYzbsON4CGPzjTciMWetlgJO6vQ3mvY3g5ugIIWvDwUbVLZuKu2p5gN2wJZYTudSG8LAvfl01qomnaWJpHGBHRBYY26XykMEC8Rgx/FhoMfzUNW4GoNhAqCVG09KUsZUmQoeMEirFjces76rsQzu0IMBaPdEa87kZo1pU70uqtqwU3V4G2jjH42DPAYE1zjbLtsAoHR0B2JDCTsa47bTp0W1hKFN7HOgNAZzWmVnOi/ALLF4AFBoe5X6WlEvB/fTTmsVJuqb48kkpyKlKE551x4Ds5rBpTdijKY+Xcm4D7kK2smn+OfbuE1jNup938+kK2yoxACGfF4zG+FX8DHO01TuS5WnlPCoBDEQzmYNxYvRx+hkWvwB85RiraL0CkNDCrCt8PEyABPsQMuNzin1WluXos38usgzC7uNBWlpEzZWHRWyFWf9WPuIxbuNwagjiGZcZ+8oEilaYEnuaVe96bFe/w1LKZsbpOQGWMh5r7XYh5g6nV5uxO3sGMLGAqG4fpGYCEFNUM8a+EACZWdh7TTsXJgmM+t1mjJBYBBDKum9vmmEtI9uPIv20tQ5sxnQP+Y2Dvng9Lzo4q4g5/1UAoOC/bDoMFK12RrUwMH7++3PrTJRKRoH+ipdvwgyv+TdH4PUUUlX+5QGoqI65i4LQVgqF7Vof3+r0xNOa4+a6t01mQjecqlj+Ytg9fW3i0y4Z9I//G/rAH/geM12kq9fBv9egdVYrT7L2AAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Agile CRM";
        }
    })
    export class AgileCRM extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    