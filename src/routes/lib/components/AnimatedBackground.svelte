<script>
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <!-- Floating Particles -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <!-- Large floating bubbles -->
    <div class="absolute w-20 h-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full animate-float-slow" style="top: 10%; left: 10%;"></div>
    <div class="absolute w-16 h-16 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full animate-float-medium" style="top: 20%; right: 15%;"></div>
    <div class="absolute w-12 h-12 bg-gradient-to-br from-orange-200/30 to-purple-200/30 rounded-full animate-float-fast" style="top: 60%; left: 5%;"></div>
    <div class="absolute w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full animate-float-slow" style="bottom: 20%; right: 10%;"></div>
    <div class="absolute w-14 h-14 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full animate-float-medium" style="bottom: 40%; left: 20%;"></div>
    
    <!-- Small sparkle particles -->
    <div class="absolute w-3 h-3 bg-purple-400/40 rounded-full animate-sparkle" style="top: 15%; left: 30%;"></div>
    <div class="absolute w-2 h-2 bg-pink-400/40 rounded-full animate-sparkle-delayed" style="top: 35%; right: 25%;"></div>
    <div class="absolute w-4 h-4 bg-orange-400/40 rounded-full animate-sparkle" style="top: 70%; left: 60%;"></div>
    <div class="absolute w-2 h-2 bg-purple-400/40 rounded-full animate-sparkle-delayed" style="bottom: 30%; right: 40%;"></div>
    <div class="absolute w-3 h-3 bg-pink-400/40 rounded-full animate-sparkle" style="bottom: 60%; left: 80%;"></div>
    
    <!-- Geometric shapes -->
    <div class="absolute w-8 h-8 bg-gradient-to-br from-purple-300/20 to-transparent rotate-45 animate-rotate-slow" style="top: 25%; left: 70%;"></div>
    <div class="absolute w-6 h-6 bg-gradient-to-br from-pink-300/20 to-transparent rotate-45 animate-rotate-reverse" style="top: 80%; right: 30%;"></div>
    <div class="absolute w-10 h-10 bg-gradient-to-br from-orange-300/20 to-transparent rotate-45 animate-rotate-slow" style="bottom: 10%; left: 40%;"></div>
  </div>

  <!-- Animated Wave Pattern -->
  <div class="fixed inset-0 pointer-events-none">
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
      <defs>
        <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgba(147, 51, 234, 0.05);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(236, 72, 153, 0.05);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(249, 115, 22, 0.05);stop-opacity:1" />
        </linearGradient>
        <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgba(249, 115, 22, 0.03);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(236, 72, 153, 0.03);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(147, 51, 234, 0.03);stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- First wave -->
      <path class="animate-wave-1" fill="url(#wave-gradient-1)" 
            d="M0,400 C300,300 600,500 900,400 C1050,350 1150,400 1200,380 L1200,800 L0,800 Z">
      </path>
      
      <!-- Second wave -->
      <path class="animate-wave-2" fill="url(#wave-gradient-2)" 
            d="M0,500 C300,400 600,600 900,500 C1050,450 1150,500 1200,480 L1200,800 L0,800 Z">
      </path>
    </svg>
  </div>

  <!-- Floating Lines -->
  <div class="fixed inset-0 pointer-events-none">
    <div class="absolute w-px h-20 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent animate-float-line" style="top: 30%; left: 25%;"></div>
    <div class="absolute w-px h-16 bg-gradient-to-b from-transparent via-pink-300/30 to-transparent animate-float-line-delayed" style="top: 50%; right: 35%;"></div>
    <div class="absolute w-px h-24 bg-gradient-to-b from-transparent via-orange-300/30 to-transparent animate-float-line" style="bottom: 40%; left: 75%;"></div>
  </div>
{/if}

<style>
  @keyframes float-slow {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) rotate(0deg); 
    }
    25% { 
      transform: translateY(-20px) translateX(10px) rotate(90deg); 
    }
    50% { 
      transform: translateY(-10px) translateX(20px) rotate(180deg); 
    }
    75% { 
      transform: translateY(-30px) translateX(5px) rotate(270deg); 
    }
  }

  @keyframes float-medium {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) rotate(0deg); 
    }
    33% { 
      transform: translateY(-15px) translateX(-10px) rotate(120deg); 
    }
    66% { 
      transform: translateY(-25px) translateX(15px) rotate(240deg); 
    }
  }

  @keyframes float-fast {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) scale(1); 
    }
    50% { 
      transform: translateY(-40px) translateX(-20px) scale(1.1); 
    }
  }

  @keyframes sparkle {
    0%, 100% { 
      opacity: 0.2; 
      transform: scale(0.8); 
    }
    50% { 
      opacity: 0.8; 
      transform: scale(1.2); 
    }
  }

  @keyframes sparkle-delayed {
    0%, 100% { 
      opacity: 0.1; 
      transform: scale(0.6) rotate(0deg); 
    }
    50% { 
      opacity: 0.6; 
      transform: scale(1.4) rotate(180deg); 
    }
  }

  @keyframes rotate-slow {
    from { 
      transform: rotate(45deg); 
    }
    to { 
      transform: rotate(405deg); 
    }
  }

  @keyframes rotate-reverse {
    from { 
      transform: rotate(45deg); 
    }
    to { 
      transform: rotate(-315deg); 
    }
  }

  @keyframes wave-1 {
    0%, 100% {
      d: path("M0,400 C300,300 600,500 900,400 C1050,350 1150,400 1200,380 L1200,800 L0,800 Z");
    }
    50% {
      d: path("M0,420 C300,320 600,520 900,420 C1050,370 1150,420 1200,400 L1200,800 L0,800 Z");
    }
  }

  @keyframes wave-2 {
    0%, 100% {
      d: path("M0,500 C300,400 600,600 900,500 C1050,450 1150,500 1200,480 L1200,800 L0,800 Z");
    }
    50% {
      d: path("M0,480 C300,380 600,580 900,480 C1050,430 1150,480 1200,460 L1200,800 L0,800 Z");
    }
  }

  @keyframes float-line {
    0%, 100% { 
      transform: translateY(0px) scaleY(1); 
      opacity: 0.3; 
    }
    50% { 
      transform: translateY(-30px) scaleY(1.2); 
      opacity: 0.7; 
    }
  }

  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }

  .animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
  }

  .animate-float-fast {
    animation: float-fast 4s ease-in-out infinite;
  }

  .animate-sparkle {
    animation: sparkle 3s ease-in-out infinite;
  }

  .animate-sparkle-delayed {
    animation: sparkle-delayed 4s ease-in-out infinite 1s;
  }

  .animate-rotate-slow {
    animation: rotate-slow 20s linear infinite;
  }

  .animate-rotate-reverse {
    animation: rotate-reverse 15s linear infinite;
  }

  .animate-wave-1 {
    animation: wave-1 12s ease-in-out infinite;
  }

  .animate-wave-2 {
    animation: wave-2 16s ease-in-out infinite 2s;
  }

  .animate-float-line {
    animation: float-line 5s ease-in-out infinite;
  }

  .animate-float-line-delayed {
    animation: float-line 7s ease-in-out infinite 2s;
  }
</style>
