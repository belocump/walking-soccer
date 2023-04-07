import Image from 'next/image'

export default function Logo() {
  return (
    <div className="mx-auto px-4 py-4">
    
      <Image
       src="/title.png"
       alt=''
       width={700}
       height={450}
      />

     </div>
  )
}
