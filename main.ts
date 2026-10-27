let lachaln: Sprite = null
let mySprite: Sprite = null
animation.stopAnimation(animation.AnimationTypes.All, mySprite)
animation.runMovementAnimation(
lachaln,
animation.animationPresets(animation.easeUp),
5000,
    true                                               https://classroom.google.com/c/NzkzNzI3Nzc5NTYw/p/ODkzMTkzMTY0OTc0/detailshttps://classroom.google.com/c/NzkzNzI3Nzc5NTYw/p/ODkzMTkzMTY0OTc0/detailshttps://classroom.google.com/c/NzkzNzI3Nzc5NTYw/p/ODkzMTkzMTY0OTc0/detailshttps://classroom.google.com/c/NzkzNzI3Nzc5NTYw/p/ODkzMTkzMTY0OTc0/detailshttps://classroom.google.com/c/NzkzNzI3Nzc5NTYw/p/ODkzMTkzMTY0OTc0/detailshttps://classroom.google.com/c/NzkzNzI3Nzc5NTYw/p/ODkzMTkzMTY0OTc0/details
)
controller.moveSprite(mySprite)
info.setScore(0)
for (let index = 0; index < 4; index++) {
    scene.setBackgroundImage(assets.image`lachaln`)
}
