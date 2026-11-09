
import { connection } from "next/server";

export default async function DeviceStatus() {
  await connection();

  const online = Math.random() > 0.2;

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
      <div>
        <h3 className="font-semibold text-white">
          Status Perangkat
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Kondisi koneksi perangkat IoT
        </p>
      </div>

      <span
        className={`rounded-full px-4 py-2 text-xs font-bold ${
          online
            ? "bg-green-500/10 text-green-400"
            : "bg-red-500/10 text-red-400"
        }`}
      >
        {online ? "● ONLINE" : "● OFFLINE"}
      </span>
    </div>
  );
}
