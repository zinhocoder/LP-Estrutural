"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Printer,
  CreditCard,
  Flag,
  ShoppingBag,
  Phone,
  Mail,
  ArrowRight,
  Coffee,
  BookOpen,
  MessageCircle,
  Gift,
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
    const baseUrl = "https://wa.me/5517997398569"
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
        href="https://wa.me/5517997398569?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20gráficos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Hero Section - Alterando o background para #193737 */}
      <section className="w-full bg-[#193737] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Imagem à esquerda sem margens - oculta em mobile */}
          <div className="hidden md:block lg:w-1/2 h-full">
            <Image
              src="/hero-image.png"
              alt="Profissional Estrutural"
              width={600}
              height={800}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Conteúdo à direita */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-16">
            <div className="mb-4 md:mb-6 w-full max-w-[180px] md:max-w-[250px]">
              <Image src="/logo.png" alt="Estrutural Logo" width={250} height={70} className="w-full h-auto" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Vai expor em feiras ou eventos?
            </h1>

            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90">
              A estrutural é especialista em destacar sua marca! Brindes, uniformes, embalagens e impressos que chamam
              atenção e geram conexão com seu público. Estamos aqui para te ajudar!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-white text-[#0a2342] hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-bold"
                onClick={() => handleWhatsAppRedirect()}
              >
                Solicite um Orçamento
              </Button>
              <Button
                variant="outline"
                className="border-white text-[#0a2342] hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-bold"
                onClick={() => handleWhatsAppRedirect("Olá, gostaria de ver o catálogo de produtos.")}
              >
                Ver Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brindes Personalizados - Nova seção */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-[#f5f0e5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] text-center mb-3 md:mb-4">
            Brindes Personalizados
          </h2>
          <p className="text-base md:text-lg text-gray-700 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            Destaque sua marca com nossos brindes corporativos de alta qualidade. Ideais para eventos, fidelização de
            clientes e fortalecimento da sua identidade visual.
          </p>

          <div className="flex justify-center">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-4xl">
              <Image
                src="/brindes.jpg"
                alt="Brindes Personalizados"
                width={1000}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-[#193737] p-2 rounded-full mr-3">
                  <Gift className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a2342]">Brindes Corporativos</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                Canetas, chaveiros, bonés e muito mais. Personalizamos com sua marca para fortalecer sua presença no
                mercado.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-[#193737] p-2 rounded-full mr-3">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a2342]">Canecas e Garrafas</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                Produtos úteis e duráveis que mantêm sua marca presente no dia a dia dos seus clientes e colaboradores.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-[#193737] p-2 rounded-full mr-3">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a2342]">Cartões NFC</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                Tecnologia e praticidade em um único produto. Compartilhe informações com um simples toque.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-12">
            <Button
              className="bg-[#193737] hover:bg-[#193737]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
              onClick={() => handleWhatsAppRedirect("Olá, gostaria de saber mais sobre brindes personalizados.")}
            >
              Solicitar Catálogo de Brindes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cartões de Visita NFC */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] mb-4 md:mb-6">
                Cartões de visita com tag NFC
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Conectados com apenas um toque. Tecnologia NFC para compartilhar seus dados de contato instantaneamente.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Compartilhe seu perfil profissional com um simples toque
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Atualize suas informações remotamente a qualquer momento
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Impressão de alta qualidade com tecnologia embutida
                  </p>
                </li>
              </ul>
              <Button
                className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
                onClick={() =>
                  handleWhatsAppRedirect("Olá, gostaria de saber mais sobre os cartões de visita com NFC.")
                }
              >
                Solicitar Informações <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-100 p-3 rounded-xl shadow-lg">
                <Image
                  src="/tagnfc.png?height=500&width=600&text=Cartões+NFC"
                  alt="Cartões de visita com NFC"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wind Banners */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1 hidden md:block">
              <div className="bg-gray-100 p-3 rounded-xl shadow-lg">
                <Image
                  src="/windbanner.png?height=500&width=600&text=Wind+Banners"
                  alt="Wind Banners"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] mb-4 md:mb-6">Wind Banners</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Destaque sua marca em eventos, feiras e na frente do seu estabelecimento com nossos Wind Banners
                personalizados.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Impressão digital de alta definição</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Estrutura resistente e durável</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Diversos tamanhos e formatos disponíveis</p>
                </li>
              </ul>
              <Button
                className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
                onClick={() => handleWhatsAppRedirect("Olá, gostaria de saber mais sobre Wind Banners.")}
              >
                Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sacolas Personalizadas */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] mb-4 md:mb-6">
                Sacolas Personalizadas
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Transforme sua marca em uma experiência memorável com sacolas personalizadas!
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                Destaque sua empresa desde o primeiro contato com o cliente. Nossas sacolas personalizadas são ideais
                para lojas, eventos, brindes e ações promocionais. Qualidade, estilo e identidade visual em cada
                detalhe!
              </p>
              <h3 className="font-bold text-[#0a2342] mb-2 md:mb-3">O que oferecemos:</h3>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <ShoppingBag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Modelos variados: Alça cordão, fita, boca de sino, sacolas ecológicas e mais
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <ShoppingBag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Tamanhos sob medida: Pequeno, médio ou grande, conforme sua necessidade
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <ShoppingBag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Materiais de qualidade: Papel kraft, offset, plástico, tecido TNT ou reciclável
                  </p>
                </li>
              </ul>
              <Button
                className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
                onClick={() => handleWhatsAppRedirect("Olá, gostaria de saber mais sobre sacolas personalizadas.")}
              >
                Solicite seu orçamento agora mesmo! <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-100 p-3 rounded-xl shadow-lg">
                <Image
                  src="/sacolas.png?height=500&width=600&text=Sacolas+Personalizadas"
                  alt="Sacolas Personalizadas"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embalagens para Food */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] text-center mb-3 md:mb-4">
            FOOD...
          </h2>
          <p className="text-base md:text-lg text-gray-700 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
            Embalagens personalizadas para delivery, restaurantes e food trucks
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1 hidden md:block">
              <div className="bg-gray-100 p-3 rounded-xl shadow-lg">
                <Image
                  src="/food.jpg?height=500&width=600&text=Embalagens+Food"
                  alt="Embalagens para Food"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl md:text-2xl font-bold text-[#0a2342] mb-4 md:mb-6">
                Embalagens que valorizam seu produto
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                Nossas embalagens personalizadas para alimentos não apenas protegem seu produto, mas também fortalecem
                sua marca e melhoram a experiência do cliente.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Caixas para hambúrgueres, hot dogs e lanches</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Embalagens para delivery de refeições</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Sacolas kraft personalizadas</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Embalagens para doces e sobremesas</p>
                </li>
              </ul>
              <Button
                className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
                onClick={() => handleWhatsAppRedirect("Olá, gostaria de saber mais sobre embalagens para alimentos.")}
              >
                Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impressão Offset */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] mb-4 md:mb-6">
                Impressão Offset Profissional
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Trabalhamos com máquina off-set de ponta, garantindo alta qualidade, precisão e produtividade em
                impressões gráficas profissionais para diversos segmentos.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Printer className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Catálogos e revistas de alta qualidade</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Printer className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Folders, flyers e materiais promocionais</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Printer className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Cartões de visita e papelaria corporativa</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Livros e materiais editoriais</p>
                </li>
              </ul>
              <Button
                className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
                onClick={() =>
                  handleWhatsAppRedirect("Olá, gostaria de saber mais sobre serviços de impressão offset.")
                }
              >
                Solicitar Informações <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-100 p-3 rounded-xl shadow-lg">
                <Image
                  src="/offset.png?height=500&width=600&text=Impressão+Offset"
                  alt="Impressão Offset"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copos Térmicos */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1 hidden md:block">
              <div className="bg-gray-100 p-3 rounded-xl shadow-lg">
                <Image
                  src="/stanleys.jpg?height=500&width=600&text=Copos+Térmicos"
                  alt="Copos Térmicos"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] mb-4 md:mb-6">
                Sua marca na temperatura ideal!
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Mantenha bebidas quentes ou geladas por horas com nossos copos térmicos personalizados. Ideais para
                brindes corporativos, eventos ou uso diário, eles oferecem praticidade e visibilidade contínua para sua
                marca.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Diversos modelos e tamanhos disponíveis</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Personalização com sua logo ou arte</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Qualidade premium e durabilidade garantida</p>
                </li>
              </ul>
              <Button
                className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
                onClick={() =>
                  handleWhatsAppRedirect("Olá, gostaria de saber mais sobre copos térmicos personalizados.")
                }
              >
                Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Totens Dobráveis */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] mb-4 md:mb-6">
                Totens Dobráveis
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Displays promocionais versáteis e de alto impacto visual para sua marca. Ideais para eventos, feiras,
                pontos de venda e ações promocionais.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Fácil montagem e transporte</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Impressão digital de alta definição</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Diversos tamanhos e formatos disponíveis</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0a2342] p-2 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">Material resistente e durável</p>
                </li>
              </ul>
              <Button
                className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white rounded-full px-6 md:px-8 py-4 md:py-6"
                onClick={() => handleWhatsAppRedirect("Olá, gostaria de saber mais sobre totens dobráveis.")}
              >
                Solicitar Informações <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-100 p-3 rounded-xl shadow-lg">
                <Image
                  src="/totens.png?height=500&width=600&text=Totens+Dobráveis"
                  alt="Totens Dobráveis"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      {/* Substituindo a seção de Formulário de Orçamento */}
      {/* Formulário de Orçamento */}
      <section className="w-full py-8 md:py-1 px-4 md:px-8 lg:px-16 bg-[#4c4c4c] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <div className="space-y-4 md:space-y-6 py-4 md:py-6">
              <div className="mb-4 w-full max-w-[180px] md:max-w-[220px]">
                <Image
                  src="/logo.png"
                  alt="Estrutural Logo"
                  width={220}
                  height={70}
                  className="w-full h-auto brightness-150 contrast-125"
                />
              </div>

              <div className="mt-6 md:mt-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
                  ENTRE EM
                  <br />
                  CONTATO
                </h2>

                <p className="text-sm md:text-base mb-4 md:mb-6">
                  Na Estrutural Negócios, estamos sempre prontos para ouvir você. Seja para esclarecer dúvidas,
                  solicitar um orçamento ou conhecer mais sobre nossos serviços, entre em contato pelos canais abaixo:
                </p>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">E-mail: </span>
                    <a
                      href="mailto:estruturalnegócios@gmail.com"
                      className="ml-1 md:ml-2 underline hover:text-gray-200 text-sm md:text-base"
                    >
                      vendas@estrutural.com.br
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">WhatsApp: </span>
                    <a
                      href="https://wa.me/5517997398569"
                      className="ml-1 md:ml-2 underline hover:text-gray-200 text-sm md:text-base"
                    >
                      17 99739-8569
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-2 md:mr-3 text-sm md:text-base">📸</div>
                    <span className="text-sm md:text-base">Instagram: </span>
                    <a
                      href="https://instagram.com/estruturalnegócios_inteligente"
                      className="ml-1 md:ml-2 underline hover:text-gray-200 text-sm md:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @estruturalnegócios_inteligente
                    </a>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <Button
                    className="bg-white text-[#1d4747] hover:bg-gray-100 px-6 md:px-8 py-2 md:py-3 rounded-full"
                    onClick={() => handleWhatsAppRedirect()}
                  >
                    FAÇA SEU ORÇAMENTO
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block h-full">
              <div className="h-full w-full">
                <Image
                  src="/hero-image.png"
                  alt="Profissional Estrutural"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer - Alterando o background para #193737 */}
      <footer className="w-full py-6 md:py-8 px-4 md:px-8 lg:px-16 bg-[#193737] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="Estrutural Logo"
                width={180}
                height={50}
                className="h-auto brightness-150 contrast-125"
              />
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-200 mb-1 md:mb-2 text-sm">
                © {new Date().getFullYear()} Estrutural. Todos os direitos reservados.
              </p>
              <p className="text-white text-sm">
                Desenvolvido por{" "}
                <a
                  href="https://www.devpro.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-300 hover:text-blue-200 transition-colors"
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
