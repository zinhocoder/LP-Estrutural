"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Printer,
  Gift,
  Flag,
  ShoppingBag,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  })

  const handleWhatsAppRedirect = (message = "") => {
    const baseUrl = "https://wa.me/5517996468616"
    const text = message || "Olá, gostaria de solicitar um orçamento para serviços gráficos."
    window.open(`${baseUrl}?text=${encodeURIComponent(text)}`, "_blank")
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir a mensagem com os dados do formulário
    const message = `Olá, gostaria de solicitar um orçamento.
Nome: ${formData.nome}
Empresa: ${formData.empresa}
Email: ${formData.email}
Telefone: ${formData.telefone}
Serviço: ${formData.servico}
Mensagem: ${formData.mensagem}`

    handleWhatsAppRedirect(message)
  }

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      {/* Botão flutuante de WhatsApp */}
      <a
        href="https://wa.me/5517996468616?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20gráficos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-purple-500 hover:bg-purple-950 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Hero Section - Mantendo o background atual */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Imagem à esquerda sem margens */}
          <div className="lg:w-1/2 h-full">
            <Image
              src="/hero-image.png"
              alt="Profissional Estrutural"
              width={600}
              height={800}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Conteúdo à direita */}
          <div className="lg:w-1/2 p-8 lg:p-16">
            <div className="mb-6 w-full max-w-[250px]">
              <Image src="/logo.png" alt="Estrutural Logo" width={250} height={70} className="w-full h-auto" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vai expor em feiras ou eventos?</h1>

            <p className="text-lg md:text-xl mb-8">
              A estrutural é especialista em destacar sua marca! Brindes, uniformes, embalagens e impressos que chamam
              atenção e geram conexão com seu público. Estamos aqui para te ajudar!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold"
                onClick={() => handleWhatsAppRedirect()}
              >
                Solicite um Orçamento
              </Button>
              <Button
                variant="outline"
                className="border-white text-purple-700 hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                onClick={() => handleWhatsAppRedirect("Olá, gostaria de ver o catálogo de produtos.")}
              >
                Ver Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços - Background mais suave */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Soluções completas para destacar sua marca em qualquer ocasião
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-purple-200">
              <div className="bg-purple-100 p-4 rounded-full mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <Printer className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Impressos Gráficos</h3>
              <p className="text-gray-600">
                Cartões, panfletos, folders, adesivos, tags e muito mais, em pequenas e grandes tiragens.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-purple-200">
              <div className="bg-purple-100 p-4 rounded-full mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <Gift className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Brindes Personalizados</h3>
              <p className="text-gray-600">
                Canecas, camisetas, chaveiros e outros itens promocionais com a identidade da sua marca.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-purple-200">
              <div className="bg-purple-100 p-4 rounded-full mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <Flag className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Comunicação Visual</h3>
              <p className="text-gray-600">
                Banners, backdrops, placas, fachadas e adesivos de vitrine para eventos e empresas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-purple-200">
              <div className="bg-purple-100 p-4 rounded-full mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <ShoppingBag className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Embalagens Personalizadas</h3>
              <p className="text-gray-600">
                Sacolas e embalagens customizadas para food delivery, restaurantes e comércio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções para Food Delivery - Background mais forte e atrativo */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Soluções para o Ramo Alimentício</h2>
          <p className="text-lg text-white/90 text-center mb-16 max-w-3xl mx-auto">
            Embalagens personalizadas que valorizam seu produto e fortalecem sua marca
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Embalagens que Impressionam</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Caixas para hambúrgueres com seu logo e cores</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Embalagens para hot dogs e lanches diversos</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Marmitas personalizadas para delivery de refeições</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Sacolas kraft resistentes com impressão de alta qualidade</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Adesivos para fechamento de embalagens</p>
                </li>
              </ul>
              <Button
                className="mt-8 bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-6 font-bold"
                onClick={() => handleWhatsAppRedirect("Olá, gostaria de conhecer as soluções para o ramo alimentício.")}
              >
                Conheça Nossas Soluções <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <Image
                  src="/estruturalembalagem.png?height=500&width=600"
                  alt="Embalagens para Food Delivery"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos para Eventos - Background mais forte e atrativo */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-800 via-purple-700 to-fuchsia-700 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Produtos para Eventos e Feiras</h2>
          <p className="text-lg text-white/90 text-center mb-16 max-w-3xl mx-auto">
            Destaque sua marca em qualquer evento com nossa linha completa de comunicação visual
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <Image
                  src="/feira.png?height=500&width=600"
                  alt="Produtos para Eventos"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Destaque-se em Qualquer Ocasião</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Banners em diversos tamanhos e acabamentos</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Backdrops e painéis para fundo de palco</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Totens e displays para feiras e congressos</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Brindes promocionais personalizados</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-300 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">Crachás e credenciais para controle de acesso</p>
                </li>
              </ul>
              <Button
                className="mt-8 bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-6 font-bold"
                onClick={() =>
                  handleWhatsAppRedirect("Olá, gostaria de solicitar um orçamento para produtos de eventos e feiras.")
                }
              >
                Solicite um Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio - Background mais suave */}
<section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-50 to-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Nosso Portfólio</h2>
    <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
      Conheça alguns dos nossos trabalhos e veja como podemos transformar a comunicação visual da sua empresa
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Projeto 1 */}
      <div className="overflow-hidden rounded-xl shadow-lg group">
        <div className="relative h-64">
          <Image
            src="/portfolio/hamburgueria.png"
            alt="Embalagens Premium para Hamburgueria"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-bold text-gray-800">Embalagens Premium para Hamburgueria</h3>
          <p className="text-gray-600 text-sm">Caixas, adesivos e sacolas personalizadas com identidade visual única.</p>
        </div>
      </div>

      {/* Projeto 2 */}
      <div className="overflow-hidden rounded-xl shadow-lg group">
        <div className="relative h-64">
          <Image
            src="/portfolio/kit-delivery.png"
            alt="Kit Delivery para Restaurante Saudável"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-bold text-gray-800">Kit Delivery para Restaurante Saudável</h3>
          <p className="text-gray-600 text-sm">Marmitas, etiquetas e sacolas kraft com identidade alinhada ao conceito saudável.</p>
        </div>
      </div>

      {/* Projeto 3 */}
      <div className="overflow-hidden rounded-xl shadow-lg group">
        <div className="relative h-64">
          <Image
            src="/portfolio/feira-gastronomica.png"
            alt="Identidade Visual para Stand de Feira"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-bold text-gray-800">Identidade Visual para Stand de Feira</h3>
          <p className="text-gray-600 text-sm">Banners, backdrops e painéis atrativos para exposições e feiras gastronômicas.</p>
        </div>
      </div>

      {/* Projeto 4 */}
      <div className="overflow-hidden rounded-xl shadow-lg group">
        <div className="relative h-64">
          <Image
            src="/portfolio/brindes-promocionais.png"
            alt="Brindes Promocionais para Evento Corporativo"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-bold text-gray-800">Brindes Promocionais para Evento Corporativo</h3>
          <p className="text-gray-600 text-sm">Canecas, cadernos e chaveiros personalizados para fortalecer a marca.</p>
        </div>
      </div>

      {/* Projeto 5 */}
      <div className="overflow-hidden rounded-xl shadow-lg group">
        <div className="relative h-64">
          <Image
            src="/portfolio/lancamento-produto.png"
            alt="Visual para Lançamento de Produto"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-bold text-gray-800">Visual para Lançamento de Produto</h3>
          <p className="text-gray-600 text-sm">Totens, credenciais e painéis criados para gerar impacto em eventos de lançamento.</p>
        </div>
      </div>

      {/* Projeto 6 */}
      <div className="overflow-hidden rounded-xl shadow-lg group">
        <div className="relative h-64">
          <Image
            src="/portfolio/lanchonete-delivery.png"
            alt="Personalização para Lanchonete Delivery"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-bold text-gray-800">Personalização para Lanchonete Delivery</h3>
          <p className="text-gray-600 text-sm">Hot dogs e sanduíches embalados com estilo e reforço de marca.</p>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <Button
        className="bg-purple-600 hover:bg-purple-700 rounded-full px-8 py-6"
        onClick={() => handleWhatsAppRedirect("Olá, gostaria de ver mais projetos do portfólio.")}
      >
        Ver Mais Projetos
      </Button>
    </div>
  </div>
</section>


      {/* Formulário de Orçamento - Background médio */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-purple-200 to-fuchsia-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-4">
            Solicite um Orçamento Rápido
          </h2>
          <p className="text-lg text-purple-700 text-center mb-12 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-800">
                      Nome
                    </label>
                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block mb-2 text-sm font-medium text-gray-800">
                      Empresa
                    </label>
                    <Input
                      id="empresa"
                      placeholder="Nome da empresa"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-gray-800">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servico" className="block mb-2 text-sm font-medium text-gray-800">
                    Serviço de Interesse
                  </label>
                  <select
                    id="servico"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:ring-purple-500"
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="impressos">Impressos Gráficos</option>
                    <option value="brindes">Brindes Personalizados</option>
                    <option value="comunicacao">Comunicação Visual</option>
                    <option value="embalagens">Embalagens para Food Delivery</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-gray-800">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva seu projeto ou necessidade"
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    rows={4}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg rounded-full">
                  Enviar Solicitação
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 text-purple-800">Fale Conosco</h3>

              <div className="space-y-6">
                <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1 text-purple-600" />
                  <div>
                    <h4 className="font-medium mb-1 text-purple-800">Telefone</h4>
                    <p className="text-gray-700">(17) 99646-8616</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
                  <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1 text-purple-600" />
                  <div>
                    <h4 className="font-medium mb-1 text-purple-800">E-mail</h4>
                    <p className="text-gray-700">contato@estrutural.com.br</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
                  <MapPin className="h-6 w-6 mr-4 flex-shrink-0 mt-1 text-purple-600" />
                  <div>
                    <h4 className="font-medium mb-1 text-purple-800">Endereço</h4>
                    <p className="text-gray-700">
                      Av. Principal, 1000 - Centro
                      <br />
                      Cidade - Estado, 00000-000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 rounded-full px-8 py-6 text-white"
                  onClick={() => handleWhatsAppRedirect("Olá, gostaria de falar com um especialista.")}
                >
                  Fale com um Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Background forte */}
      <footer className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-purple-900 to-fuchsia-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Image
                src="/logo.png"
                alt="Estrutural Logo"
                width={200}
                height={60}
                className="h-auto brightness-150 contrast-125"
              />
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-200 mb-2">
                © {new Date().getFullYear()} Estrutural. Todos os direitos reservados.
              </p>
              <p className="text-white">
                Desenvolvido por{" "}
                <a
                  href="https://www.devpro.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-fuchsia-300 hover:text-fuchsia-200 transition-colors"
                >
                  DevPro
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
