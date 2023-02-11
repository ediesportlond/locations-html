const embeds = {
  '7035' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.2405090444017!2d-80.15756308527827!3d26.35108189038565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91db73d924d63%3A0xf18309289c6f96d7!2sBoca%20Code!5e0!3m2!1sen!2sus!4v1675909900944!5m2!1sen!2sus" width="2000" height="1500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '123' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229929.1760331919!2d-80.36954504080217!3d25.782340427384238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1676086210365!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '123t' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886188.2414548673!2d-95.96176379086245!3d29.815995327640312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1676086276409!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '42' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889349.3538210324!2d-99.07484953233426!3d29.45739964059073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1676086292589!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
}

const changeIframe = (key) => {
  document.getElementById("iframe-container").innerHTML = embeds[key]
}

const dropdownSelect = () => {
  key = document.getElementById("store-dropdown").value
  document.getElementById("iframe-container").innerHTML = embeds[key]
}
