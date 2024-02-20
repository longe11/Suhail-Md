#=============================================#
#                 v.1.2.8                     #  
# █▀▀▀█ █  █ █  █ ▄▀▀▄ ▀█▀ █     █▀▄▀█ █▀▀▄   #
# ▀▀▀▄▄ █  █ █▀▀█ █▄▄█  █  █     █ █ █ █  █   #
# █▄▄▄█ ▀▄▄▀ █  █ █  █ ▄█▄ █▄▄█  █   █ █▄▄▀   #
#     𝗠𝗨𝗟𝗧𝗜𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧        #
#=============================================#
# 
#    * @project_name : Suhail-Md
#    * @author : @SuhailTechInfo
#    * @youtube : https://www.youtube.com/c/@SuhailTechInfo
#    * @description : Suhail-Md ,A Multi-functional whatsapp bot md.
#    * @version 1.2.8
# 
# Don't change this [ /SuhailTechInfo/ ] name!
# Change from below link, else bot not works!

 

FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/SuhailTechIMd/Suhail-Md /root/Suhail
WORKDIR /root/Suhail/
RUN npm install
EXPOSE 8000
CMD ["npm","start" ] 