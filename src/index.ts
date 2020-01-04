import { WorldMap } from './worldmap';

(function() {
    
    const worldmap = new WorldMap([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]);

    let output = "";
    for (let y = 0; y < worldmap.getHeight(); y++) {
        const row = [];
        for (let x = 0; x < worldmap.getWidth(); x++) {
            row.push(worldmap.getTile(x, y).description);
        }

        output += row.join(", ") + "\n";
    }
    console.log(output)
})();