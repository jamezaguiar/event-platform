import { gql, useQuery } from '@apollo/client';
import '@vime/core/themes/default.css';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { DiscordLogo, Lightning } from 'phosphor-react';
import { Button } from './Button';
import { Card } from './Card';
import { Teacher } from './Teacher';

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

type GetLessonBySlugResponse = {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
};

type VideoProps = {
  lessonSlug: string;
};

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: { slug: lessonSlug },
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            <Teacher
              avatarUrl={data.lesson.teacher.avatarURL}
              bio={data.lesson.teacher.bio}
              name={data.lesson.teacher.name}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button link="#" variant="primary">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Button>
            <Button link="#" variant="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Card
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            title="Material complementar"
            link="#"
          />
          <Card
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina"
            title="Wallpapers exclusivos"
            link="#"
          />
        </div>
      </div>
    </div>
  );
}
