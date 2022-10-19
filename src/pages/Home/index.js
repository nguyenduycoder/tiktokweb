import Contentitem from "~/components/ContentItem";

function Home() {
    const data = [{
        title: 'Khi Duy Thẩm được idol nhận ra:))',
        htag: ['_n2104'],
        nickname: 'duythamschannel',
        fullname: 'Duy Thẩm',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665757201241090.jpeg?x-expires=1666231200&x-signature=ph%2FwdjYIJPE7kmWY2H5aZRKJ3fE%3D',
        tick: 1,
        namemusic: 'nhạc nền - Duy Thẩm',
        following: 10000,
        comment: 1000,
        share: 200,
        videosrc: 'https://v16-webapp.tiktok.com/9d49edb7f9729299be2c6c7aa93f0e15/634fb1c8/video/tos/useast2a/tos-useast2a-pve-0037-aiso/514a5906457245b39ab23e7a339b305a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2704&bt=1352&cs=0&ds=3&ft=kLO5qy-gZmo0PN-7KBkVQEcBDiHKJdmC0&mime_type=video_mp4&qs=0&rc=NDRpOjc2ZzhoODk6NDw4NEBpM2Q1M2g6Zjg6ZzMzZjgzM0BiLTAuYi1iXzExNWMtNjM2YSMxXmEycjQwNDBgLS1kL2Nzcw%3D%3D&l=202210190212340102452472032205F296&btag=80000'
    }, {
        title: 'Unbox phong bì mừng cưới anh em Schannel(phần 1)',
        htag: ['duytham', 'Schannel'],
        nickname: 'duythamschannel',
        fullname: 'Duy Thẩm',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665757201241090.jpeg?x-expires=1666231200&x-signature=ph%2FwdjYIJPE7kmWY2H5aZRKJ3fE%3D',
        tick: 1,
        namemusic: 'nhạc nền - Duy Thẩm',
        following: 100,
        comment: 1000,
        share: 200,
        videosrc: 'https://v16-webapp.tiktok.com/9d49edb7f9729299be2c6c7aa93f0e15/634fb1c8/video/tos/useast2a/tos-useast2a-pve-0037-aiso/514a5906457245b39ab23e7a339b305a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2704&bt=1352&cs=0&ds=3&ft=kLO5qy-gZmo0PN-7KBkVQEcBDiHKJdmC0&mime_type=video_mp4&qs=0&rc=NDRpOjc2ZzhoODk6NDw4NEBpM2Q1M2g6Zjg6ZzMzZjgzM0BiLTAuYi1iXzExNWMtNjM2YSMxXmEycjQwNDBgLS1kL2Nzcw%3D%3D&l=202210190212340102452472032205F296&btag=80000'
    }]
    return <div>
        {data.map((res, index) => { return <Contentitem data={res} key={index} /> })}

    </div>
}
export default Home;