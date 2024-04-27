const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawalkane(length,branch) {

    var current = [50,50]
    ctx.moveTo(current[0],current[1])
    var size = 20
    var xy=[[50,50]]

    for (let i=0; length-1 > i; i++) {
        console.log(50+(size*((-1)**i)))
        xy.push([50+(size*(i+1)),50+(size*((-1)**i))])
        current[0]=current[0]+size
        current[1]=current[1]+(size*((-1)**i))

        ctx.lineTo(current[0],current[1])
    }

    console.log(xy)
    ctx.lineWidth = 1;
    ctx.stroke();


    // draw a branch
    var blength = branch[1]
    var blocation = branch[0]
    
    current = xy[blocation-1]

    ctx.moveTo(current[0],current[1])

    for (let i=0; blength > i; i++) {
        current[0]=current[0]+(size*((-1)**i))
        current[1]=current[1]+size

        ctx.lineTo(current[0],current[1])
    }

    ctx.lineWidth = 1;
    ctx.stroke();
}
