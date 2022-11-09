import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import {
    ref,
    /* uploadBytes,*/
    getDownloadURL,
    uploadBytesResumable,
    deleteObject
} from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';



import styles from './Upload.module.scss'
import 'react-circular-progressbar/dist/styles.css';
import { generateVideoThumbnails, getVideoThumbnail } from '~/hook/useGetimage';
import Switch from "react-switch";
import Button from '~/components/Button';
import Optioncontainer from './Optioncontainer';
import ListImgVideo from './ListImgVideo';
import Note from './Note';
import UploadFile from './UploadFile';
import API from '~/utils/Services';
import storage from '~/firebase';



// import axios from 'axios';


const cx = classNames.bind(styles)
const datacheck = [{ title: 'Comment', disable: false }, { title: 'Duet', disable: false }, { title: 'Stitch', disable: false }]
const datachose = ['Public', 'Friends', 'Private']
function Upload() {
    const [checkedbox, setCheckedbox] = useState(['Comment', 'Duet', 'Stitch']);
    const [duration, setDuration] = useState(0);
    const [showFriend, setShowFriend] = useState(false)
    const [file, setFile] = useState('')
    const [chose, setChose] = useState(0)
    const [srcvideo, setSrcvideo] = useState('')
    const [srcvideo2, setSrcvideo2] = useState('')
    const [srcimage, setSrcimage] = useState('')
    const [note, setNote] = useState('')
    const [thumbnailsimg, setThumnailsimg] = useState('')
    const [imagestorage, setImageStorage] = useState('')
    const [checked, setChecked] = useState(false)
    const [upload, setUpload] = useState(0)
    const [arrayimage, setArrayImage] = useState([])
    const inputref = useRef()
    const friendref = useRef()
    let len = useRef(0)


    // let leninput = useRef(0)





    useEffect(() => {

        if (file !== '') {
            const src = URL.createObjectURL(new Blob([file], { type: 'video/mp4' }))
            setSrcvideo2(src)
            handlerUploadVideo()
            getVideoThumbnail(file, 0.01).then(res => {
                setThumnailsimg(res)
                handlerUploadimage(res)

            })
        }
    }, [file])

    const getduration = (duration) => {
        setDuration(duration)
        if (duration > 60) {
            setCheckedbox(['Comment'])
        } else {
            setCheckedbox(['Comment', 'Duet', 'Stitch'])
        }
    }
    const handlerClickinput = () => {
        inputref.current.click()
    }
    const handlerCancel = () => {

    }
    const handlerChangeFile = (e) => {
        setFile(e.target.files[0])
    }
    const handlerChangeFilev2 = () => {
        setFile('')
        setUpload(0)
        setNote('')
        setArrayImage([])
        // const desertRef = ref(storage, `/images/${imagestorage}`);

        // // Delete the file
        // deleteObject(desertRef).then(() => {
        //     console.log('success')
        //     // File deleted successfully
        // }).catch((error) => {
        //     console.log(error)
        //     // Uh-oh, an error occurred!
        // });
    }
    const handlerSubmitvideo = async () => {

        let optcomment = datacheck[0].title
        let optduet = datacheck[1].title
        let otpstitch = datacheck[2].title



        let form = {
            iduser: 1,
            title: note,
            modeview: chose,
            optcomment: checkedbox.includes(optcomment) ? 1 : 0,
            optduet: checkedbox.includes(optduet) ? 1 : 0,
            optstitch: checkedbox.includes(otpstitch) ? 1 : 0,
            likes: 0,
            shares: 0,
            comments: 0,
            htag: null,
            imagecover: srcimage,
            src: srcvideo
        }
        console.log(form)
        await API.uploadVideo(form).then(result => {
            console.log(result)
        })
    }

    const handlerSetnote = (e) => {
        const textconvert = e.target.value
        if (textconvert.slice(-1) === `@` && textconvert.length >= len.current) {
            setShowFriend(true)
        }
        if (textconvert.slice(-1) === `#` && textconvert.length >= len.current) {

        }

        setNote(textconvert)

        len.current = e.target.value.length
    }
    const handlerGetnickname = (nickname) => {

        let textspecal = `${nickname}`
        setNote(`${note}${textspecal}`)
        setShowFriend(false)
        setTimeout(() => {
            friendref.current.focus()
        }, 200)
    }
    const getlistimage = () => {
        generateVideoThumbnails(file, 8).then(res => {
            // handlerUploadimage(res[0])
            setArrayImage(res.slice(0, 8))
        })
    }
    const getthumnailsimg = (img) => {
        setThumnailsimg(img)
    }

    const handleChangeSwitch = () => {
        setChecked(!checked)
    }
    const handlerUploadVideo = async () => {

        const storageRef = ref(storage, `/videos/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // update progress
                // setPercent(percent);
                setUpload(percent)
                if (percent === 100) {

                    let text = `${file.name.slice(0, file.name.length - 4)}`

                    getlistimage()
                    setNote(`${note}${text}`)
                }
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setSrcvideo(url)

                });
            }
        );
    }
    const handleCheck = (event) => {
        var updatedList = [...checkedbox];
        if (event.target.checked) {
            updatedList = [...checkedbox, event.target.value];
        } else {
            updatedList.splice(checkedbox.indexOf(event.target.value), 1);
        }
        setCheckedbox(updatedList);

    };



    const handlerUploadimage = async (result) => {
        console.log('updateimge')
        const response = await fetch(result);
        // here image is url/location of image
        const blob = await response.blob();
        const fileimage = new File([blob], `tiktok-${uuidv4()}.jpg`, { type: blob.type });
        setImageStorage(fileimage.name)
        const storageRef = ref(storage, `/images/${fileimage.name}`)
        const uploadTask = uploadBytesResumable(storageRef, fileimage);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // update progress
                // setPercent(percent);
                // console.log(percent)
                // setUpload(percent)
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setSrcimage(url)
                });
            }
        );
    }
    const handlerAddHtag = () => {
        const htag = note + '#'
        friendref.current.focus()
        setNote(htag)
    }
    const handlerAddFriend = () => {
        // const friend = note + '@'
        // setNote(friend)
    }

    const handlersetchose = (index) => {
        setChose(index)
    }
    const handlerCloseFriend = () => {
        setShowFriend(false)
        setNote(note + '@')
        setTimeout(() => {
            friendref.current.focus()
        }, 200)
    }

    const cancel = async () => {


    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('jsx-layout1')}>
                    <div className={cx('jsx-layout2')}>
                        <div className={cx('jsx-container')}>
                            <span className={cx('title')}>Upload Video</span>
                            <div className={cx('sub-title')}>
                                <span>Post videos to your account</span>
                            </div>
                            <div className={cx('content-v2')}>
                                <UploadFile
                                    ref={inputref}
                                    file={file}
                                    upload={upload}
                                    srcvideo={srcvideo}
                                    handlerClickinput={handlerClickinput}
                                    handlerCancel={handlerCancel}
                                    handlerChangeFile={handlerChangeFile}
                                    handlerChangeFilev2={handlerChangeFilev2} />
                                <div className={cx('form-v2')}>
                                    <Note
                                        ref={friendref}
                                        note={note}
                                        showFriend={showFriend}
                                        handlerSetnote={handlerSetnote}
                                        handlerAddHtag={handlerAddHtag}
                                        handlerAddFriend={handlerAddFriend}
                                        handlerCloseFriend={handlerCloseFriend}
                                        handlerGetnickname={handlerGetnickname}
                                    />
                                    <ListImgVideo arrayimage={arrayimage} srcvideo2={srcvideo2} srcvideo={srcvideo} getduration={getduration} filevideo={file} getthumnailsimg={getthumnailsimg} />
                                    <Optioncontainer
                                        duration={duration}
                                        checkedbox={checkedbox}
                                        chose={chose}
                                        datacheckbox={datacheck}
                                        handleCheck={handleCheck}
                                        datachose={datachose}
                                        handersetchose={handlersetchose}
                                    />
                                    <div></div>
                                    <div className={cx('switch-upload')}>
                                        <span >
                                            Run the copyright check
                                        </span>
                                        <div className={cx('switch')}>
                                            <Switch onChange={handleChangeSwitch} checked={checked} checkedIcon={false} uncheckedIcon={false} />
                                        </div>

                                    </div>
                                    <div className={cx('titleoption-v3')}>
                                        <span>
                                            We'll check your video for potential copyright infringements on used sounds. If infringements are found, you can edit the video before posting.</span>
                                        <span className={cx('titleoption-v4')}>Learn more</span>
                                    </div>
                                    <div className={cx('button-upload')}>
                                        <Button second onClick={cancel}>Discard</Button>
                                        <Button primary onClick={handlerSubmitvideo}>Post</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Upload;