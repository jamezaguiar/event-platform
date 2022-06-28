type TeacherProps = {
  avatarUrl: string;
  name: string;
  bio: string;
};

export function Teacher({ avatarUrl, bio, name }: TeacherProps) {
  return (
    <div className="flex items-center gap-4 mt-6">
      <img
        src={avatarUrl}
        alt={name}
        className="h-16 w-16 rounded-full border-2 border-blue-500"
      />

      <div className="leading-relaxed">
        <strong className="font-bold text-2xl block">{name}</strong>
        <span className="text-gray-200 text-sm block">{bio}</span>
      </div>
    </div>
  );
}
