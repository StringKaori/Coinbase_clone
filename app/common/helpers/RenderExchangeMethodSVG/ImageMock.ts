import bitcoinSVG from '@assets/ExnchangeMethodsImages/bitcoin.svg'
import ethereumSVG from '@assets/ExnchangeMethodsImages/ethereum.svg'
import amazonSVG from '@assets/ExnchangeMethodsImages/amazon.svg'
import appstoreSVG from '@assets/ExnchangeMethodsImages/appstore.svg'
import steamSVG from '@assets/ExnchangeMethodsImages/steam.svg'
import googleplaySVG from '@assets/ExnchangeMethodsImages/googleplay.svg'
import othersSVG from '@assets/ExnchangeMethodsImages/others.svg'
import { SvgProps } from 'react-native-svg'

const imageMock: Record<string, React.FC<SvgProps>> = {
    "bitcoin": bitcoinSVG,
    "Ethereum": ethereumSVG,
    "Amazon": amazonSVG,
    "App Store": appstoreSVG,
    "Steam": steamSVG,
    "Google Play": googleplaySVG,
    "others ": othersSVG
}

export { imageMock };