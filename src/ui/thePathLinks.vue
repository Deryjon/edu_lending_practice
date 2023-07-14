<template>
	<div class="path-sections flex items-center">
			<div class="icon w-[10px] lg:w-[14px] h-[10px] lg:h-[14px]">
				<img
					src="../assets/icons/home-path-icon.svg"
					alt="home-path-icon"
					class="w-full h-full"
				/>
			</div>
			<p class="ml-[6px] text-xs lg:text-sm text-[#D9D9D9]">Главная</p>
			<div class="icon-prev ml-[10px] lg:ml-[22px]">
				<img
					src="../assets/icons/path-svg-link.svg"
					alt="path-svg-link"
				/>
			</div>
			<p
				class="about-path-link text-xs text-[#7A7A7A] ml-[10px] lg:ml-[22px] lg:text-sm"
			>
			 <slot/>
			</p>
			<div class="icon-prev ml-[10px] lg:ml-[22px]">
				<img
					src="../assets/icons/path-svg-link.svg"
					alt="path-svg-link"
				/>
			</div>
			<p
				class="about-path-link text-xs text-[#7A7A7A] ml-[10px] lg:ml-[22px] lg:text-sm"
			>
			<slot name="mySlotName"></slot>
			</p>
		</div>
</template>
<script>
export default{

}
</script>