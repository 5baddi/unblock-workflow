import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "jotform-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAC/VBMVEUAAAD//////////////vz////////69fL////+/v76+vr////y8vL+/v7y8vL////////z8/P////////////////////////////////////////////////////////////////0hjL////3o1rtgzD1mU32nET////z8/Py8vL09PTx8fHy8vLzhjH2lEj09PTPcSjw8PD859v60bjVnIHJcjbFZwTEbSn09PTq0sf2nk7Jbyv//Pzy8vL4uo7Hbyz0j0DyhjP3pFvzhzT0oVr4oFe9bSzTkG/////y8vLx8fH//v7+/f3zhjP4+Pj29vb9/Pz09PTty7n6+vrZr5voxrXbsp31hzLEbCjszLzqyrrpyLfiuqbetaGlf272o1nHbyv7+/vnw7Hivargt6Ouinn0hS/uz77sybbUqJOohHOngXHyhTH89vPu7u7YrZjXq5bTpZCxkICjfGz2oVj3n0/JbynDWQD++vj47OX14df03M/vzLnkv63dtKCwjHuqhXT3pF73pFvJczfIbijHbCL78ez77+jl3drds57TrpvQp5TJo5HIn4y2l4m2jn2pgWynfmmkeWVjYF+dcV2cbllLTEyQXEP1mjr/kjbGcTPIcC/YeC7zgyzzgyQAAADw6+np6en36OD35tzw39jT09Pv0cHpzsHYyMG9vb3RwLrjwrPxyLDLsqa+p5+cm5r0uZG+mojAl4R6fHyrh3edeGmhe2ifdmX2p2T2pWL+rWD/p1zPhlxXV1f2n1X1kUD/kDTmfy/UdS7fei3OciskJCTEYgD18vHt6Ofj4+Pr5OHc3NzU1NT74dLf08/c0c3y18nx1cXLurX5zLCwsLDduKXvvZ/Bp5u7oJXNoY3eqIzGmYT3s4Lwr4K6lIL/vIDZnX50dHTSk3PlmW9vb2+DcmrvllufcVhMUVP1m1HsjU+2c06XZk7/pk3MfUv1lEdJRkRHQ0L/lz7zjT3GcTXAbC71lywrKyvLbh/JaADFZwDMYwDDXQCtWQDpOOnoAAAASXRSTlMA/fr3BQYCA5caPfz2F/qcVfz08+TXzsW4qYp7Yl9EQCIR+J34/fz8+dbFuKmdlmJfTBH+/f34+PPk5M7OnJyXl4uLe3tEIyMXxnip4AAABZxJREFUSMeNlwV0E0EQhpMLhAR3d3d3d5jkLp5CG2KlDZQWCpTi7u7u7u7u7u7u7m6P2Usv+5K7Nvx9fS+52y8z88/e3q5MSsmSBV5JkUL2X1ImVxK+aZNyjRqULduwcbkKzVIIl4MpOf6nSV+vVuHdu3Z9OjBz5swDc6rXrl+hOX8raaXAhFPWyczef7s7vnDRgkRF3N0OzfldM11KTCfJ5BHNlx0AKhUrXDh+0Ps2LXW6lodD3VWrDe4AXCmCJx5WKVPnQLQ4U3nGQJfL9bmNrr1Odyh0yODuVYozLBhKq3FQomHzZAQ5kwrYDTN2xg/ap0O4ZZFuoe7B3VcDa0mrgdTlcZi0U8pCAIwcOBi2o+vA+EFF2+gQPhg6ZPbQX0uA02s1aQ1QRokDJdgC2QCjArBwdsbAQS7X/rk6LHlOaLdZx/Z0ANag1WgypIWSFSlNWXUWUMh5Fi5/2xnv8mbd/gjC3TsBy5q0GlRqKJFGoGm9BZAF4OEed4rtcA18KWTtnt19ORg5JBPoin51o4XKbMgmwMNdXVGYNd+obu6h7p7AhWt9dEmln+dKWSFkBXjYmjXXNtx9NnfevDa6I+jXsUdYCvrlo8v4J52H2OyL3HbZctvqfrcev2o5b6gbGxUBRkC/BKWF8oj4klZnhFTgg3v2adsqJKKFdVTnB3u+/hj65Q82CkwUzmBIrUZICJwDGJALtAB3bNd5zJZJr2f9fIeNYjUI09ClEUroUj7w0yIC2wl829ll66S/nTEbI0XJz+hTIsabJcuOgYFqsTmsVetIAo/v0mX71ukjMGsLElQZoBSCfOCUQHKm6kVgh7VTu5sDnNuc09cRH/T+sEmDofnI6YARwX37IbzJiZGnnsDAgtm06roIYuFpMvtnDb3NYSERIxEe73TGTL9EArOmANhYI40sGf6lB7lfYLa32RZiH2ntOHaAM2ZK9HESmNP4wxm0kJ43XMVPLiruAsKRGHlTTIzzzQrCgm9y0mmm4juVNQDucdFsQ7Oto/vHRE8ZF87DejGclRiWPxMt2ftQLTPb+jpaWMcOiI6ZOgKMACK/SLMy5Uc4L5bsD7c12yIcLTrei94yZR2wLKBMAbDWIIe8COf2BqZwh7ZhrSL6tRjtGRA9aQFJmvpFYT0DuRHOBYoAuE9YiL1fi7HR/aeu8rI4OQPFKSAXwjkD4WHmsNaRDut4zwSPAb8SWQIDaxDKKe4UPs5RBB7tiXt+PoEFvahkhFRScM8oW99Ix8a4iTeMAmwSlUxgqbQXRdkiIq1x/SeSp8krkV9GkraUYYujWtntY+ImroXArKlYQMOkWtUrKsTu2OjxLCDzQ3KGaE3A8q2ik4TCre2j4iYIbWJFBWs1FsLklZqevUP62sd4xhm8sFGjDSBNerzB4PSUejB6m1s7xk04503agiwlETV4a1GQB0PcK27F2quj+l9nRVYR0pJgobdTgYsBC5bN0yY/3XYKP5E3Y0C6gpDAxUBYhiis3zztxfz15BOHVgmoSW/03uaFQGZchoQFkMKaJ3s/fliIboVjuUK64TxFAzOQTrz0Ihw7ee/8lfxiK6TrK5TCALj0ihZ9DhZOPvpQDxyWS9wlhYrFQHYERa8bDk5OO3oGLCatN11IRPkQE73oODiNboXTvoglx8E5EBK9YhFe+j0WYqm7YuHQjGqExC93I6y8ArF6oxRFrc6DiMS2goWlsUYOkpKCtEl6Q8MiGYTNpkRAeisVlM1SAIdLbuKCSI6sGgcnsn1MUqkYyFaAsuKNa5I2QyElZSW3zIlFlUPGPDgs6c06Q8PToBgVcqhlyhTBjgnoi4KRy32ggncyez4cEPSAki6zwBB508hMDyhBj0aqrJnAp0xZVenTkFv/eyhLnj9v7lw5VaqcuXLnzZ88+KFM+jhIr4j1D0bzMYIsXruBAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "JotForm Trigger";
        }
    })
    export class JotFormTrigger extends NodeBlock
    {
    
    }