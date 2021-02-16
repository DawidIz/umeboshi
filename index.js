const DATA = {
    PLAYER: {
        SPRITE: {
            SRC: './assets/chef.gif',
            WIDTH: 128,
            HEIGHT: 192,
            TILE_WIDTH: 32,
            TILE_HEIGHT: 48,
            FRAME_X: 3, // 0 1 2 3
            FRAME_Y: 2, // 0 1 2 3
        },
        POSITION: {
            X: 0,
            Y: 0,
        },
    },
}

console.log(DATA)

const playerSpriteSrc = './assets/chef.gif'
const game = document.getElementById('game')

const backgroundCanvas = document.createElement('canvas')
backgroundCanvas.height = 600
backgroundCanvas.width = 800

game.append(backgroundCanvas)

const loadImage = async (src) => {
    const img = new Image()
    img.src = src

    try {
        await img.decode()
        return img
    } catch (error) {
        console.log(error)
    }
}

const drawSprite = (canvas, img) => {}

const main = async () => {
    const { PLAYER } = DATA
    const playerSprite = await loadImage(PLAYER.SPRITE.SRC)
    console.log(playerSprite)

    setInterval(() => {
        backgroundCanvas
            .getContext('2d')
            //.beginPath()
            //.clearRect(0, 0, 100, 100)
            .drawImage(
                playerSprite,
                PLAYER.SPRITE.FRAME_X * PLAYER.SPRITE.TILE_WIDTH,
                PLAYER.SPRITE.FRAME_Y * PLAYER.SPRITE.TILE_HEIGHT,
                PLAYER.SPRITE.TILE_WIDTH,
                PLAYER.SPRITE.TILE_HEIGHT,
                PLAYER.POSITION.X,
                PLAYER.POSITION.Y,
                PLAYER.SPRITE.TILE_WIDTH,
                PLAYER.SPRITE.TILE_HEIGHT
            )
        DATA.PLAYER.SPRITE.FRAME_X = (DATA.PLAYER.SPRITE.FRAME_X + 1) % 4
        DATA.PLAYER.POSITION.X++
        DATA.PLAYER.POSITION.Y > 800
            ? (DATA.PLAYER.POSITION.Y = 0)
            : (DATA.PLAYER.POSITION.Y += 4)
    }, 200)
}

main()

// 128 x 192
// 64 x 96
