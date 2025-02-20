<!-- Thanks.svelte -->
<script lang="ts">
    interface Person {
      name: string;
    }
  
    interface Section {
      title: string;
      people: Person[];
    }
  
    const sections: Section[] = [
      {
        title: "Special thanks",
        people: [
          { name: "Stuart Derbyshire" },
          { name: "Chua Yun Da" },
          { name: "Kwek Siong Peng" },
          { name: "David Anghel" },
          { name: "Sundarimaa Erdembileg" },
          { name: "Joanne Roberts" },
          { name: "Alyson Rozells" },
          { name: "Cole Lim" },
          { name: "Freya Lalani" },
          { name: "Kasthuri Vello & team" },
          { name: "Md Shafei Bin Seri & team" },
          { name: "Paul Tan & team" },
          { name: "Poonam Rai" },
          { name: "Noor Julihaty" },
          { name: "Phoebe Koh" },
          { name: "Garik Asplund" },
          { name: "Peiyan Wong" }
        ]
      },
      {
        title: "Abstract reviewers",
        people: [
          { name: "Colin Palmer" },
          { name: "Camilo Libedinsky" },
          { name: "Mengmi Zhang" },
          { name: "Christopher L. Asplund" },
          { name: "David Anghel" },
          { name: "Jing Wen Chai" },
          { name: "Yun Da Chua" },
          { name: "Shui'Er Han" },
          { name: "Jing Jie" },
          { name: "Siong Peng Kwek" },
          { name: "En-Lin Leong" },
          { name: "Takashi Obana" },
          { name: "Yang Shen" },
          { name: "Evangelos Sigalas" },
          { name: "Nicholas Tan" },
          { name: "Bo Wang" },
          { name: "Xu Wu" }
        ]
      },
      {
        title: "Volunteers",
        people: [
          { name: "Nicholas Tan" },
          { name: "Yi Xuan Yan" },
          { name: "Barbara Chemurgor" },
          { name: "Rebecca Min" },
          { name: "Elaine Wang" },
          { name: "Yoong Hun Ong" },
          { name: "Minxuan Duan" },
          { name: "Yanhao Jia" },
          { name: "Shaun Jin Lee" },
          { name: "Titus Hutch" },
          { name: "Thanaporn Limmanee" },
          { name: "Shuangpeng Han" },
          { name: "Bo Wang" },
          { name: "Shruthi Kumar" },
          { name: "Yang Shen" },
          { name: "Xu Wu" },
          { name: "Qing Lin" },
          { name: "Bryan Arista Kiely" },
          { name: "Mingzhong Sun" },
          { name: "Shuyi Sun" },
          { name: "Cameron Mavericks Choo" }
        ]
      }
    ];
  </script>
  
  <div class="w-full max-w-5xl mx-auto px-4 md:px-8 py-24 flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      {#each sections as section}
        <div class="flex flex-col w-72">
          <h3 class="text-2xl font-bold mb-4 text-center">{section.title}</h3>
          <hr class="h-0.5 bg-surface-800-100-token" />
          <ul class="space-y-1 mt-8">
            {#each section.people as person}
              <li class="text-lg text-surface-600-300-token">{person.name}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>