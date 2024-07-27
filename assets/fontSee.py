from fontTools.ttLib import TTFont

def display_ascent_descent(font_path):
    font = TTFont(font_path)
    hhea = font['hhea']
    os2 = font['OS/2']

    print("hhea Ascent:", hhea.ascent)
    print("hhea Descent:", hhea.descent)
    print("OS/2 TypoAscender:", os2.sTypoAscender)
    print("OS/2 TypoDescender:", os2.sTypoDescender)
    print("OS/2 usWinAscent:", os2.usWinAscent)
    print("OS/2 usWinDescent:", os2.usWinDescent)

    font.close()

font_path = './duCoBrand_A_Bd_arabic.ttf'
display_ascent_descent(font_path)

# hhea Ascent: 1167
# hhea Descent: -480
# OS/2 TypoAscender: 686
# OS/2 TypoDescender: -200
# OS/2 usWinAscent: 1167
# OS/2 usWinDescent: 480