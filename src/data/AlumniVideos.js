// Thumbnail
import snoberthumb from "../assets/Thumbnails/snober-thumbnail.webp";
import gousiathumb from "../assets/Thumbnails/gousia-thumb.webp";
import irfanthumb from "../assets/Thumbnails/irfan-thumbnail.webp";
import umithumb from "../assets/Thumbnails/umi-lubab-thumbnail.jpeg";
import adleenthumb from "../assets/Thumbnails/adleen-thumbnail.webp";
import vardathumb from "../assets/Thumbnails/vardathumb.jpeg";
import uzmaMujtabathumb from "../assets/Thumbnails/uzma-mujtabathumb.jpeg";
import mustaqeemthumb from "../assets/Thumbnails/mustaqeemthumb.jpeg";
import asifthumb from "../assets/Thumbnails/asifthumb.jpeg";
import seeratthumb from "../assets/Thumbnails/seeratthumb.jpeg";
import uroojthumb from "../assets/Thumbnails/uroojthumb.jpeg";
import ishratthumb from "../assets/Thumbnails/ishratthumb.jpeg";
import asiyathumb from "../assets/Thumbnails/asiyathumb.jpeg";
import baeedathumb from "../assets/Thumbnails/baeedathumb.jpeg";
import gurpreetthumb from "../assets/Thumbnails/gurpreetthumb.jpeg";
import uzmathumb from "../assets/Thumbnails/uzmathumb.jpeg";


// Profile picture
import snoberprofile from "../assets/Profile/snober-profile.png";
import gousiaprofile from "../assets/Profile/gousia-profile.png";
import irfanprofile from "../assets/Profile/irfan-profile.png";
import umiprofile from "../assets/Profile/umi-profile.jpeg";
import adleenprofile from "../assets/Profile/adleen-profile.png";
import asiyaprofile from "../assets/Profile/asiyaprofile.png";
import gurpreetprofile from "../assets/Profile/gurpreetprofile.png";
import ishratprofile from "../assets/Profile/ishratprofile.png";
import mustaqeemprofile from "../assets/Profile/mustaqeemprofile.png";
import asifprofile from "../assets/Profile/asifprofile.png";
import seeratprofile from "../assets/Profile/seeratprofile.png";
import uroojprofile from "../assets/Profile/uroojprofile.png";
import uzmamujtabaprofile from "../assets/Profile/uzma-mujtabaprofile.png";
import vardaprofile from "../assets/Profile/vardaprofile.png";
import baeedaprofile from "../assets/Profile/baeedaprofile.png";
import uzmaprofile from "../assets/Profile/uzmaprofile.png";




// Videos
import SnoberVideo from "../assets/Videos/Snober-video.mp4";
import GousiaVideo from "../assets/Videos/Gousia-video.mp4";
import IrfanShafiVideo from "../assets/Videos/IrfanShafi-video.mp4";
import UmiLubabVideo from "../assets/Videos/UmiLubab-video.mp4";
import AdleenVideo from "../assets/Videos/Adleen-video.mp4";
import GurpreetVideo from "../assets/Videos/gurpreetvideo.mp4";
import UzmaVideo from "../assets/Videos/uzmavideo.mp4";
import BaeedaVideo from "../assets/Videos/baeedavideo.mp4";
import AsiyaVideo from "../assets/Videos/asiyavideo.mp4";
import VardaVideo from "../assets/Videos/vardavideo.mp4";
import TwinVideo from "../assets/Videos/twinvideo.mp4";
import MustaqeemVideo from "../assets/Videos/mustaqeem.mp4";
import AsifVideo from "../assets/Videos/asifvideo.mp4";
import SeeratVideo from "../assets/Videos/seeratvideo.mp4";
import UroojVideo from "../assets/Videos/uroojvideo.mp4";
import IshratVideo from "../assets/Videos/ishratvideo.mp4";

const alumniVideos = [
  {
    id: 1,
    slug: "snober-mehraj",
    name: "Snober Mehraj",
    subtitle: "Pursuing Research in Journalism",
    thumbnail: snoberthumb,
    image: snoberprofile,
    video: SnoberVideo,
  },
  {
    id: 2,
    slug: "gousia-hassan",
    name: "Gousia Hassan",
    subtitle: "Pursuing BSc Nursing",
    thumbnail: gousiathumb,
    image: gousiaprofile,
    video: GousiaVideo,
  },
  {
    id: 3,
    slug: "irfan-shafi",
    name: "Irfan Shafi",
    subtitle: "Pursuing MBBS",
    thumbnail: irfanthumb,
    image: irfanprofile,
    video: IrfanShafiVideo,
  },
  {
    id: 4,
    slug: "umi-lubab",
    name: "Umi Lubab",
    subtitle: "Liberal Arts at Krea University",
    thumbnail: umithumb,
    image: umiprofile,
    video: UmiLubabVideo,
  },
  {
    id: 5,
    slug: "adleen-nazir",
    name: "Adleen Nazir",
    subtitle: "Pursuing BSc Anesthesia",
    thumbnail: adleenthumb,
    image: adleenprofile,
    video: AdleenVideo,
  },

  // New Entries

  {
    id: 6,
    slug: "ishrat-gul",
    name: "Ishrat Gul",
    subtitle: "Completed MBBS",
    thumbnail: ishratthumb,
    image: ishratprofile,
    video: IshratVideo,
  },
  {
    id: 7,
    slug: "urooj-shafi",
    name: "Urooj Shafi",
    subtitle: "Practicing Doctor",
    thumbnail: uroojthumb,
    image: uroojprofile,
    video: UroojVideo,
  },
  {
    id: 8,
    slug: "seerat-mushtaq",
    name: "Seerat Mushtaq",
    subtitle: "Practicing Doctor",
    thumbnail: seeratthumb,
    image: seeratprofile,
    video: SeeratVideo,
  },
  {
    id: 9,
    slug: "asif-ashraf",
    name: "Asif Ashraf",
    subtitle: "Practicing Doctor",
    thumbnail: asifthumb,
    image: asifprofile,
    video: AsifVideo,
  },
  {
    id: 10,
    slug: "mohammad-mustaqeem",
    name: "Mohammad Mustaqeem",
    subtitle: "Successful Enterpreneur",
    thumbnail: mustaqeemthumb,
    image: mustaqeemprofile,
    video: MustaqeemVideo,
  },
  {
    id: 11,
    slug: "uzma-mujtaba",
    name: "Uzma Mujtaba",
    subtitle: "Aspiring Nurses",
    thumbnail: uzmaMujtabathumb,
    image: uzmamujtabaprofile,
    video: TwinVideo,
  },
  {
    id: 12,
    slug: "varda-aslam",
    name: "Varda Aslam",
    subtitle: "Practicing Medicine",
    thumbnail: vardathumb,
    image: vardaprofile,
    video: VardaVideo,
  },
  {
    id: 13,
    slug: "asiya-khursheed",
    name: "Asiya Khursheed",
    subtitle: "Working Engineer ",
    thumbnail: asiyathumb,
    image: asiyaprofile,
    video: AsiyaVideo,
  },
  {
    id: 14,
    slug: "baeed-shakir",
    name: "Baeeda Shakir",
    subtitle: "Government Official",
    thumbnail: baeedathumb,
    image: baeedaprofile,
    video: BaeedaVideo,
  },
  {
    id: 15,
    slug: "uzma-wani",
    name: "Uzma Wani",
    subtitle: "Pursuing BPT",
    thumbnail: uzmathumb,
    image: uzmaprofile,
    video: UzmaVideo,
  },
  {
    id: 16,
    slug: "gurpreet-singh",
    name: "Gurpreet Singh",
    subtitle: "Batch 2012",
    thumbnail: gurpreetthumb,
    image: gurpreetprofile,
    video: GurpreetVideo,
  },
];

export default alumniVideos;