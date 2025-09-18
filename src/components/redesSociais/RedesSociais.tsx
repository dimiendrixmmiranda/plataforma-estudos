'use client'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import styles from './style.module.css'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

interface RedesSociaisProps{
    tamanhoIcone: string
    estilo?: string
}

export default function RedesSociais({tamanhoIcone, estilo}: RedesSociaisProps) {
    return (
        <div>
            <ul className={`grid grid-cols-4 gap-3 max-w-[600px] mx-auto ${estilo}`}>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.facebook}`}>
                            <div className='flex items-center gap-2'>
                                <FaFacebook className={`${tamanhoIcone}`} />
                                <p className='text-xl font-black hidden'>Facebook</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.instagram}`}>
                            <div className='flex items-center gap-2'>
                                <AiFillInstagram className={`${tamanhoIcone}`} />
                                <p className='text-xl font-black hidden'>Instagram</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.tiktok}`}>
                            <div className='flex items-center gap-2'>
                                <FaTiktok className={`${tamanhoIcone}`} />
                                <p className='text-xl font-black hidden'>TikTok</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.email}`}>
                            <div className='flex items-center gap-2'>
                                <MdEmail className={`${tamanhoIcone}`} />
                                <p className='text-xl font-black hidden'>Email</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='hidden'>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
                                                        0 1 0 0 0  
                                                        0 0 1 0 0  
                                                        0 0 0 21 -7" result="goo"></feColorMatrix>
                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}