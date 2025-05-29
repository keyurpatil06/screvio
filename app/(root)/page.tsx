import EmptyState from '@/components/EmptyState'
import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { getAllvideos } from '@/lib/actions/video'
import React from 'react'

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllvideos(query, filter, Number(page || 1))

  return (
    <main className='wrapper page'>
      <Header title='All videos' subHeader='Public Library' />

      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              thumbnail={video.thumbnailUrl}
              userImg={user?.image || ''}
              username={user?.name || 'Guest'}
            />
          ))}
        </section>
      ) : (
        <EmptyState icon='/assets/icons/video.svg' title='No Videos found' description='Try adjusting your search' />
      )}
    </main>
  )
}

export default Page