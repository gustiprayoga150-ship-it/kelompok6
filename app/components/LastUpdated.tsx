
import { connection } from "next/server";

export default async function LastUpdated() {
  await connection();

  const waktu = new Date().toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "medium",
  });

  return (
    <p className="text-sm text-gray-400">
      <span className="text-cyan-400">●</span>{" "}
      Terakhir diperbarui: {waktu}
    </p>
  );
}
