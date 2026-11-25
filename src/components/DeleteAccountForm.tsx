"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"passageiro" | "motorista">("passageiro");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[KuyaKubuya] Pedido de Eliminação de Conta (${role})`
    );
    const body = encodeURIComponent(
      `Solicito a eliminação definitiva da minha conta KuyaKubuya e dados associados.\n\nTipo de conta: ${role}\nE-mail registado: ${email}\nTelefone registado: ${phone}\nMotivo (opcional): ${reason || "Não informado"}\n`
    );
    setSubmitted(true);
    window.location.href = `mailto:${SITE_CONFIG.supportEmail}?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="p-6 rounded-2xl bg-[#7ffc98]/25 border border-[#006e2e]/30 space-y-2">
        <div className="flex items-center gap-2 font-extrabold text-[#005321]">
          <CheckCircle2 className="w-5 h-5" />
          <span>Pedido preparado no seu cliente de e-mail</span>
        </div>
        <p className="text-sm text-[#0b1c30] leading-relaxed">
          Se a janela de e-mail não abriu automaticamente, envie uma mensagem para{" "}
          <strong className="font-mono">{SITE_CONFIG.supportEmail}</strong> com o e-mail e número de telefone registados na sua conta KuyaKubuya. Processamos todos os pedidos em até 7 dias úteis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0b1c30] mb-1">
            Tipo de conta na app *
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "passageiro" | "motorista")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-[#0b1c30] focus:outline-none focus:border-[#001a67]"
          >
            <option value="passageiro">Passageiro / Cliente</option>
            <option value="motorista">Motorista / Transportador</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0b1c30] mb-1">
            Telefone registado *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex: +258 84 000 0000"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-[#0b1c30] focus:outline-none focus:border-[#001a67]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0b1c30] mb-1">
          E-mail da conta *
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nome@exemplo.com"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-[#0b1c30] focus:outline-none focus:border-[#001a67]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0b1c30] mb-1">
          Observações (opcional)
        </label>
        <textarea
          rows={3}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Indique se pretende eliminar apenas tokens/histórico opcional ou toda a conta."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-[#0b1c30] focus:outline-none focus:border-[#001a67]"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-[#001a67] hover:bg-[#002b9a] text-white font-bold text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
      >
        <Mail className="w-4 h-4" />
        <span>Solicitar Eliminação da Conta</span>
      </button>
    </form>
  );
}
