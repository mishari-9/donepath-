const fs = require('fs');
const path = require('path');

const files = ['cpp.ts', 'cybersecurity.ts', 'python.ts', 'networking.ts'];

files.forEach(file => {
    const filePath = path.join(__dirname, 'src/data', file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find nodes where it is a subnode and offset X to prevent edge overlapping.
        content = content.replace(/position:\s*\{\s*x:\s*(\d+),\s*y:\s*(\d+)\s*\}(.*?isSubNode:\s*true)/gs, (match, x, y, rest) => {
            let newX = parseInt(x);
            if (newX === 100) newX = -200; // Shift left
            else if (newX === 400) newX = 650; // Shift right
            else if (newX === 700) newX = 950; // Shift right
            else if (newX === 800) newX = 1100; // Shift right
            else newX = newX + 250; 
            
            return `position: { x: ${newX}, y: ${y} }${rest}`;
        });

        fs.writeFileSync(filePath, content);
        console.log(`Fixed ${file}`);
    }
});
