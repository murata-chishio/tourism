import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-5 px-10 border-b flex justify-between item-center bg-slate-900'>
        <div className='flex '>
            <h1 className='text-2xl font-extrabold text-slate-50'>
                <Link href="/">Tourism</Link></h1>
            <nav className='text-sm font-medium px-3 py-3 rounded-md text-slate-200'>
                <Link href="/">
                    ホーム
                </Link>
            </nav>
            <nav className='text-sm font-medium px-3 py-3 rounded-md text-slate-200'>
                <Link href="/spots/new">
                    新規登録
                </Link>
            </nav>
        </div>
        <div className='flex justify-end text-slate-200'>
            <nav className='text-sm font-medium bg-blue-400 px-3 py-3 rounded-md mx-2'>
                <Link href="/login">
                    ログイン
                </Link>
            </nav>
        
            <nav className='text-sm font-medium bg-green-500 px-3 py-3 rounded-md'>
                <Link href="/register">
                    ユーザー登録
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header