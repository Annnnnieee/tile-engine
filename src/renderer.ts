class Renderer {

    private tileWidth = 60;
    private tileHeight = 60;

    renderWorld(worldMap: any, startIndex: number, offset: number){
        const canvas : any = <HTMLCanvasElement> document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        const cols = Math.floor(window.innerWidth/this.tileWidth);
        const rows = Math.floor(window.innerHeight/this.tileHeight);

        for(let r = startIndex; r < rows; r++){
            for(let c = 0; c < cols; c++){
                const tile = worldMap.getTile();
                const x = r * this.tileWidth - offset;
                const y = c * this.tileHeight;
                ctx.fillStyle = tile.getColor();    
                ctx.fillRect(x, y, this.tileWidth, this.tileHeight);
            }
        }

    }

    // render other stuff
    updateWorld(){

    }

}