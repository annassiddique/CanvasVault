import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import risidio from "./risidio.JPG"

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="FooterImg">
          <h1 className='Footer-logo'>CanvasVault</h1>
          <p className='Footer-para'>CanvasVault is a premier NFT marketplace, renowned for its diverse categories and innovative offerings. With a curated selection spanning various genres, it's a hub for artists and collectors alike. Seamlessly blending technology and creativity, CanvasVault redefines the NFT landscape, offering secure art and a vibrant community for limitless exploration.</p>
          <p className='risidio-logo-wrapper'>
            A product by
            <img src={risidio} alt="risidio" className='risidio-logo' />
          </p>
        </div>
        <div className="Footer-content">
          <div className="Footer-list-1">
            <h4>Explore</h4>
            <Link to={"/collection"} className="Footer-Links">Collections</Link>
            <Link to={"/about"} className="Footer-Links">CanvasVault</Link>
          </div>
          <div className="Footer-list-1">
            <h4>Socials</h4>
            <div className="socials-wrapper">



              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACi0lEQVR4nO2ZsU8UURCHV0ULlBhjZaGSiKU29CRqAMXCoKKJVnbGf8BGE4IJEkMjhTY2xkJRG9QzRG3sCI0XowF7O0EQRcDiPjPhkWyx9+693dndd8n9kpdcsTu/+W53Z+fNRlFLLYUtYA8wAIwBr4F54Cfwzyz5PQe8Au4CZ+ScKAQB20xCz4F1/LUGTAKnJVZUEsQQ8Bk9VYHzRQIcBT6Qn94BXXlDXACWyV8rwJW8noVhiteY2rNjIB5Snh6owJhSWbbuZIW4TDi6mqU6/VZKQt4Xj0zJlrj7gb3APqATOAaMN4jxCziSBkSrxL4HDjj4XXOINe0LcVEJogK0OXq6gIgGfaqUxht7QW4hjz/PFeSTUxUzvZOGRl0hPEFE/S4BpQHU0HGLRzcwYby21qxH7KeNIDpSdrFJFWaHBWIjY/y/QLsNRPYTGqpaPB4refTZQKS30dBHi8f33J9BNnd2GnprqYiyW9TQlA3km5JJpU78Xehpzgay2EQgP2wgWatJkSDr2iCDpvmLr7rTkYRjt9Y9T98NG8hSCpDeSEHAM0/fBVuw+RJBpIfy0VdbsEoZIMB2YFWz/I6WBHJYdfsLnE0R8Ibpn+Kry/JC7E5Y11P49ttA2oE/hF9+V4HdjS7ziyYAmbRCGLO+JgA55QIi9/GXgEGqDSFihucCBhlwBlEYB+UFMu0FYUw7zVQ8FJBl4JA3iDGWhrAWAEgNuJQKImY+EgDIcCaIWAL3SwQZV4GIJXHT4zbTAKmpXYk6n96WCgBZdJ7xZuxU3+QIMgUczBUioVOeVQSZkblzYQAJyfUAT8yY1BdkxUwee6JQxGaSJ4FbUhjqHLMTeAncBk7IOcVn2lJLkY/+A1tlbk1c+pFNAAAAAElFTkSuQmCC" className='socials' />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO2Zz04UQRCH54Be3ADe8WCE1cSLUfBgxIPgGfBVFH0BiHIUPfgnoO9ghMCyREx8BEXu60nFCAa9LB+pWBMnm0zPTPdAzSb7SybZw1R1f9vV1TVdUdRTT/YCLgIPgQ1gG/hNeRJf4rMBPJCxjgNgFGhy8voI3CgD4BTwDDjETofAU6DPF+IssEl11JQ5+ayERShl6QNwugiIhFNVtVhkY1vuiSzJ3K7lAaliSHWqkeecsNQ7YEiflYx3R1wgcthZaigxl3MZ7866QORU7RaQdRfITgmT+QEsAVMaqmf0kd/TwDKwm2K7ogDyrGaM88UFshcAcADMAf3OjfhvnAFgXm18tecawFetZEoE7gCv5F/TYjAuCF8Ckx2pXmy9FJUM0opjG6gDWzls3sdZRzNUyxrkIF4J4JYj9tP20rjajgF/LEHmEitRBCIJM6w+HluByCQG1C5POKVpU30MFv0zygJZSmzsUE2or9cWIFNqI9kpVC/U14wFSF1tJMWGatun1otKAqmpzT7h2ldftW4H+aW++rs9tD5bhta02kjZEarn6uuuBciy2kwSrtvq6431gSi1k6+aiQPxpwWIaF7tzgPfAkuUhaLGZYJIoTeqtuM6sbz6DtxU2+vWRWNnGT+c83ZSbmouqI18DX7FQ1HJIDHMWMLPhJQdklb1nJHnk2SneGMnVsILIgsk5FNXQuORbNrUAf6PM6h74u9xferuEK5drWKlALykZUdNf89oii2UnXwuH6yvg4pozQUinaJu0T0XyAjdo3rWRpT+YNW17oRQkCtAm+qqnautoDDSs6uqnuSCUJC+iobYVqHWW6IZWqWmz0aew9a1MovGrbi2hJN3e7oD6DLw1gCiAVwNBkg5Z2Yl/entehkXD7HElxSZa8B9Z2utp56iE9MRhEQQu0zJ/tkAAAAASUVORK5CYII=" className='socials' />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nO2ZW4hNURiAzxjlbuQyYUpCJiYZ4YlyKbcyophQU7y5K8UoPIgnt9TMC1HexkTJC5N4kVxeeKCJEpLklmYmtzOX8+lv/qndbs/e++yz1tn71P5eznWvf3977b3+tf6VyaSkpKQUA2AmsBrYDqwHaoHyTCkAjAFOAG/w5htwSSQD2pkMLPH6YZ5NAY2xCfhKOP4Bp909BEwHmoG/wAJ3gCnAb2CrRYkjQI78uQUsBY4Cj4A+/f6GV5BD+mMWWGVBogGzfAYqvQLdcXXpZoMS04A/BiW+AzXa9mhgjTPYB9efpfsOGBK5ZlDiBVAP7AJagF/AWmewjkEOvA5UFCAxVnvYFH2uz4fdAb/4HPwOWBlRRK6eLc54BXwS4sCbMvTlKXLSgkAOODZYwHMhG5Hb5MrAwxZC5LJhiR5go1/AxRGuyj1gJzDep90mwyJdYa7eg4iNd+uxp4A6oAoocyRBk3SEEZlrcLzP6pD+HrN88hMoc7zf5jHEJYl2P5GhwEtgHzBJZUxmYpPcDbqtJO0P8DEgr8RJc5BIG6XBniCRg5QGtUEi44BOkk1nqGUw0EiyaQ2UUJHyApJiMagPJeIoDMhyMml0ySIqtIjKDAMuJiwxNuUl4RKq0dXdz5glckB1FIGFOmuVtcR5yaZAb4wiLVF7YgTwg2TQDcyKJKIye0kGFyJLOIbiuKctb4FRBYmoTAXwOCaJXmBZwRKu5+VqxFJnITQak3AJSe31ti7+bdPqXOzZEpKC2zqpKVlKmG2SkK1KqMgQnfJLqdI09+VWLoaAVEieYgeZQdjrCWAqsBt4bUmgx8iDTf+e3Xxghr4u16Kb7Ai1Y5dXwCJTV7xST1qmAsVCKv/HgeFGJJwAs3W/IWtZ4CwwIWMbYKJs8ADPDWboh8AOYKR1AS+AOcB+2XTUeU8uZIHgmW4vb/ErcMcG/dOVah0Q6vRENwArdA1TFfc5pqRkzPIfsUZoMTqx+w0AAAAASUVORK5CYII=" className='socials' />
            </div>



          </div>

        </div>
      </div>

    </>
  )
}

export default Footer