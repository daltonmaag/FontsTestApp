# from fontTools.ttLib import TTFont

# def get_font_family_name(font_path):
#     font = TTFont(font_path)
#     name = font['name']

#     for record in name.names:
#         if record.nameID == 1 and (record.platformID == 3 or record.platformID == 1):
#             # NameID 1 is the Font Family name
#             # PlatformID 3 is Windows, PlatformID 1 is Mac
#             font_family_name = record.string.decode('utf-16-be' if record.platformID == 3 else 'mac-roman')
#             return font_family_name

#     return None

# font_path = './duCoBrand_A_Bd_name.ttf'
# font_family_name = get_font_family_name(font_path)
# print(f"Font Family Name: {font_family_name}")

from fontTools.ttLib import TTFont

def change_font_name(font_path, new_full_name, new_family_name=None, new_subfamily_name=None, new_postscript_name=None):
    font = TTFont(font_path)

    name_table = font['name']
    for record in name_table.names:
        # Change the full font name (nameID 4)
        if record.nameID == 4:
            record.string = new_full_name.encode('utf-16-be')
        
        # Optionally change the family name (nameID 1)
        if new_family_name and record.nameID == 1:
            record.string = new_family_name.encode('utf-16-be')
        
        # # Optionally change the subfamily name (nameID 2)
        # if new_subfamily_name and record.nameID == 2:
        #     record.string = new_subfamily_name.encode('utf-16-be')

        # Optionally change the PostScript name (nameID 6)
        if new_postscript_name and record.nameID == 6:
            record.string = new_postscript_name.encode('utf-16-be')

    # Save the modified font to a new file
    new_font_path = font_path.replace('.ttf', '_arabic.ttf')
    font.save(new_font_path)
    font.close()
    return new_font_path

font_path = './duCoBrand_A_Bd.ttf'
new_full_name = 'du Co Brand Beta App Bold arabic'
new_family_name = 'du Co Brand Beta App Bold arabic'  # Optional
new_subfamily_name = 'New Subfamily Name'  # Optional
new_postscript_name = 'duCoBrandBetaAppArabic-Bold'  # Optional

new_font_path = change_font_name(font_path, new_full_name, new_family_name, new_subfamily_name, new_postscript_name)
print(f"Modified font saved to: {new_font_path}")
