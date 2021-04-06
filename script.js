const whitekeyarr = ['1', '3', '5', '6', '8', '0', '=','a', 'd', 'g', 'h', 'j', 'k', 'l','z', 'x', 'c', 'v', 'n', ',', '/']
const blackkeyarr = ['2', '4', '7', '9', '-','w', 'r', 'u', 'i', 'o','s', 'f', 'b', 'm', '.']


const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => musicPlayer(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = whitekeyarr.indexOf(key)
  const blackKeyIndex = blackkeyarr.indexOf(key)
  if (whiteKeyIndex > -1) musicPlayer(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) musicPlayer(blackKeys[blackKeyIndex])
})


function musicPlayer(key) {
  const Audiofile = document.getElementById(key.dataset.note)
  Audiofile.currentTime = 0 
  Audiofile.play()
  Audiofile.playbackRate = 0.8
  key.classList.add('active')
  Audiofile.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}