import React from 'react'
import './style.scss'

const Logo = () => {
  return (
    <div className="logo">
      <svg
        width="180"
        viewBox="0 0 182 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="182" height="140" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_381_468"
              transform="translate(-0.162667 -0.337931) scale(0.00266667 0.00344828)"
            />
          </pattern>
          <image
            id="image0_381_468"
            width="500"
            height="500"
            xlinkHref="data:image/png;base64,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Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAALiMAAC4jAXilP3YAABEbSURBVHic7d3hddtoeobhVznzf5QKzFQwTAWDVLBKBeZ2wFQQbwVRB8tUEG0Fq6kgmgpW0wFdgfIDVkyBkEWRIAE8uq5zcGzQIvBZgngTIAlcPT09FQAwb/809gAAgNMJOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAX4aewAfzdXV1dhD4HhPYw+AUfilPcDTk1+PsdlDB4AA9tDh/eyxfQx2OZkVe+gAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAI4MQyfGTHnjjECUfmzYmBiGQPHQAC2EOHw/fYnvfM7eHNkyMrRLOHDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAjj1K0kudbEVpxCdFqfihbKHDgAR7KGT6FwXW3FxlmlxpAR22EMHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASDAT2MPAD6Ip5HWezXSeoELs4cOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQ4KexBwAfxNXYAwCy2UMHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAjiXO7zf09gD4IX3/jz8/IhkDx0AAthDh8O5Ytq0PO9pH/pzee/Xw6zYQweAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAJ5YBpwKdOz8/KHvoABDBHjofmVOAzptTucIOe+gAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAU7+SyMU6gA/HHjoABLCHThIX6QA+LHvoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAE+GnsAfDCdVXdVFVTVYuqWlbVzzv//ltVbavq/tv0cKFxvWVd7bif3VbV3QjjeI91TXfM1zW97WBZ7fdoV3OB9b7Hsi4zxr71HOKhvv/cnv9+acs6buxv2XybGNPT05PpgtMrFtX+Mjy9c3qsqtXZNo7DPdbLcT2MOZgDPdb0xryo6W4HTc96p6apy4yxbz3HTHf18knlJTQnjPdH05exH1tNTw65T8Cq2ph8PuK+n6rqr9U+oN8MNaB3Wn0bx65fqt0TmKpVTW/Mq5r3dsD7/amq/qfaPfblqCMhgqCPa1XtA/HPb3zdWz5V+8CwOXE5x1i9cvv6gmN4r9Urt68vOIZdq5r/dsDxfq2q/61pHG1jxryGPp6m2gfxrj+qfY3rodpn7s8W36am2r2wX3ruez3M0A62qPbBqM/nagO5vdBYDrWoaY25qflvB1T92wFfs/w23VT/k7e/fvv39TBDOtghY3/L4wDL4FRjH/P/aNOO++p5HeodP7pFta/B7d5/cer28E63nfVvO/PrC4/nELc1rTHf1zy2g6b2xzk1TY33Gvp7rWp/23ueVqcP8VVNz/oGMfZjq+nJD+Hi3/DWsueX6u7I36Om2geGLyf8Lh7juvYfkG46848XHtNbrmtaY17WfLaDpgR96PVc1/6TsedpedoQX9X0rGsQYz+2mrwpbixNz23rI5d1X+f7KMqP3NTLw4Z/q/bB6Y+d2z7VtD7adFPTGnPfetZHLuu+xtkOON622m3yv3v+7faSAyGDoI9j0Zn/WqftGT7W5V+rXnfm7779edu5fXXmcbzHujN/9+3P287tqzOP49miMz/H7YDTravq985tv9a0ngwzA4I+jmVnfjvCGE6xrJdvxvpa399Zvel87ee6/Gv7fZY1vTEvO/PbC6yT6dlW/5GZvtvgVYI+jm1n/lPN653J6878Zufv22oPZe9anW8oB1t35jc7f9/WOGPedubnth0wnPtqzwC4609le+AdBH0cDz233V54DMe6rv2Tl2zemF+dZSSHu65pjvmh57bbC6yXadr03NZceAzMmKCP46Hnts/V/kJfX3IgR1jVyzeW/V77/5+72n+j2c0Zx/SWVU1zzN0xVM1nO2B4dz23LS88BmZM0MdxVy/j8exztW9s2tR0T+G57szfvvJ1d5351cDjeI91Z/72la+768yvBh5H3/rmuh0wvG3tH3ZvLj8M5upq57PRXMDV1dXzX5fVvm721uk+f6vvV9W6P8ugDtdU1d87t/1z9b+Za1FV/+jc9i91+c+mNzXtMS9rHttBU/vfx6uerxtTU5cZ4znXs6mX5/P/rYaNelP7Y//LCcvb1LffDy2ZgLE/CP/Rpo5l7V/1663pvtqThyzPvW302HTGsnnj6x86X397tpG9blPTH/Oypr8dND1jmJqm5nVimT5fzrjsquGvttY8L3jsx1aTE8uM7aHaB+S/VP+h1z6/VtV/Vnsxh4e63KHs69q/EtjmjfvcduZXwwzlYNc1jzE/1Hy2A2CiBH1822qflS+q6t+rPWvU1wPv+0t9v2xmM/TAOtad+T/q7UO/d/Xy//JzXTY86878lMe8rXlsB8BEudratNzV9zdmLat9Q1RTr18d7Nmnal8X+3Od79KZq878IevZVvv/2d1LXh143yGsOvOHrHdb4465atrbAed13ZnvnkHuHE652trDUINgAGMf8/9o0wluqj0c/FgHvqY1oJue9SwOvG9zwn1PcXPCepsT7ntuNzXOdtD0rGNqmpr/a+j3neXeD7jsKhdniZ4ccp+Pu2oPIS+qPST72jP3L2dY96rntn/UYW+a+XvPfddnGGPXque2qY/5EHc13nbA+XWPwjyOMQjmSdDn6a7aQ7F9V2n6tYbdm1xUewrKIa3qvCdOWdT8xnyMu7rcdsD53fTc9nDhMTBjgj5vq9o/EUXVsB9lWg+4rGc/13lPmLI+wzLPPeZTrOr82wHnd9Nz292Fx8CMeVPc/G1q/zDdsoZ7IFh15p9PcPJeN/Xyamfrutwb+OYw5lNt6rzbAee1qP2PWP5eDrnzDoI+f49nXPaq9s9gtq7jDgM+VvvRqme/VBucY5b1I6ua35iH8Dj2ADjJ7YG3wascch9HU99PJnKq657bHgdYbtX+nm7fRU0Otan9z1Wvj1zWj6w681Mec1Pz2A44r3Xtv+fjj5ru0SAmStDH8aXavb37Ov2kJX33fzhxmVXtIcDuIdzbE5e56czf1LBvNFvUvMb8paa/HXBe66r6r1duh/cZ+3NzH22q9oG3+zGphzruc8N9y3o8cZN4tulZ9vWJy1z2LHN94jJ3bXqWf33iMpc9y1yfuMyq+WwHz5qedUxNU/P5HPqi2vc39H1scnP6EF/V9KxvEGM/tpqe/BAu/g3fv/hH90F4XW8fgr2p/RNQPE+rAX43r6s9Y9o5HmQeav//PITrmteYu8uc4nawq+lZx9Q0Ne2gX1f7M9v03H/3Sd31YCPd1/SscxBjP7aanrwpbgRNtc/Mu4eGq9pTd+4efuv7KFLf/Xa/fnPkuHbd1P4by4ZYblV7CHz3jWafqv2e3J+43Jua15ibmv528Jb7gZazrvm/PHD/xr//6Of17G/VPhHbnjiW97ofaDnNQMvhWGM/o/ho045V7e9RnjI91HDP7B86y34caLlV7RjPcYjxoeY35qppbwe7mgHH2J2aM47xHPrWc8q0rcu9Zj702P9/Gvux1eTUr2PaVPs62n/U4ZfM7PO12stuLmuYZ/bLevnZ66ph9/a2tX9ms891WoSWNb8xP9vUNLcDzu9rtdvVsnxEjQEI+ri21f4iL6rqX6t9QO47vNr1tdrDc3/+dt8vA45p3XPbZsDlv7a81QnLWx+4jlP0LW810LK3Nb3tgPP4rdqIP//MVuXjhQzkqnMYmDO7uro69EsX1X8u7sfyAPCRLMp2wAxoyfgEHQACOOQOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQACCDoABBB0AAgg6AAQQNABIICgA0AAQQeAAIIOAAEEHQAC/B+9fpxiO+cK0QAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  )
}

export default Logo
