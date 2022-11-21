local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/xHeptc/Kavo-UI-Library/main/source.lua"))()
local Window = Library.CreateLib("Basic Commands", "Sentinel")

--Main
local Tab = Window:NewTab("Commands")
local Section = Tab:NewSection("Fly")

Section:NewButton("Enable Fly", "Makes you fly", function()
    loadstring(game:HttpGet("https://pastebin.com/raw/W5aQUui6"))()
end)


Section:NewButton("Enable Super Speed", "Makes you very fastest", function()
    loadstring(game:HttpGet("https://pastebin.com/raw/743REekx"))()
end)


























Section:NewKeybind("ToggleGui", "Toggles the gui", Enum.KeyCode.V, function()
	Library:ToggleUI()
end)