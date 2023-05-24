import { Google, GitHub } from "../icons";

export const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center">
        <div className="flex-1 bg-slate-700 h-[1px]" />
        <p className="px-3 text-sm text-[#9CA3AF] leading-5">
          Login with social accounts
        </p>
        <div className="flex-1 bg-slate-700 h-[1px]" />
      </div>
      <div className="flex items-center justify-center mt-1 gap-8">
        <button>
          <Google />
        </button>
        <button>
          <GitHub />
        </button>
      </div>
    </div>
  );
};
