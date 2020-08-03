// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import sharp from 'sharp'

export default async (req, res) => {
  try {
    const { src, w = 150 } = req.query
    const width = parseInt(w)

    await axios({
      url: src,
      method: 'GET',
      responseType: 'arraybuffer'
    }).then( async response => {
        const imageBuffer = Buffer.from(response.data, 'binary')
        const resizesBuffer = await sharp(imageBuffer).resize(width).toBuffer()

        res.statusCode = 200
        res.setHeader('Cache-Control', 'public, s-maxage=31536000, maxage=31536000')
        res.end(resizesBuffer)
      }
    )
  } catch (error) {

  }
}
