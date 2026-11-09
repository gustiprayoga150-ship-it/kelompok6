
import { connection } from "next/server";

export default async function SensorAlert() {
  await connection();

  const suhu = Number((25 + Math.random() * 15).toFixed(1));
  const kelembapan = Math.floor(30 + Math.random() * 51);

  const alerts = [];

  if (suhu > 35) {
    alerts.push(`Suhu terlalu tinggi: ${suhu}°C`);
  }

  if (kelembapan < 40) {
    alerts.push(`Kelembapan terlalu rendah: ${kelembapan}%`);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Notifikasi Sensor
      </h3>

      {alerts.length === 0 ? (
        <div className="rounded-xl bg-green-500/10 p-4 text-green-400">
          ✓ Semua kondisi sensor dalam keadaan normal.
        </div>
      ) : (
        <div className="space-y-2">
          {alerts.map((alert, index) => (
            <p
              key={index}
              className="rounded-xl bg-red-500/10 p-4 text-sm text-red-400"
            >
              ⚠️ {alert}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
